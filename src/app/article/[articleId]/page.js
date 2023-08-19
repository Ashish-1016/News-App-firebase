'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsFillSaveFill } from 'react-icons/bs'
import { TiTick } from 'react-icons/ti'


function Page({ params }) {

    const [saved, setSaved] = useState(false)

    useEffect(() => {
        if (localStorage.getItem(`${article.title}`)) {
            setSaved(true)
        }
    }, [saved])

    async function handleFavSav() {
        if (saved) {
            setSaved(false)
            localStorage.removeItem(`${article.title}`)
        }
        else {
            setSaved(true)
            localStorage.setItem(`${article.title}`, `${article.title}`)
        }
    }

    const news = JSON.parse(localStorage.getItem('news'));
    console.log(localStorage.getItem('news'))
    console.log(params)
    const article = news[params.articleId];

    if (!article) {
        return <div>Loading...</div>;
    }

    const formattedDate = new Date(article.publishedAt).toLocaleDateString("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div className="flex flex-col items-center">
            <div className='max-w-4xl  space-y-3'>
                <Link className='text-black font-semibold underline underline-offset-2 hover:text-blue-700 cursor-pointer' href='/'>Back to Home page</Link>
                <p className=" flex items-center text-sm font-medium text-gray-500">Poested: {formattedDate},
                    <section className='w-full flex justify-end'>
                        {!saved ? <BsFillSaveFill onClick={handleFavSav} className='w-10 h-5 text-blue-600  duration-200 transition cursor-pointer' /> : <TiTick onClick={handleFavSav} className='w-10 h-5 text-green-600  duration-200 transition cursor-pointer' />}

                    </section>
                </p>
                <h1 className="text-xl font-bold text-blue-600">{article.title}</h1>
                <a className='text-black font-semibold underline underline-offset-2 hover:text-blue-700 cursor-pointer' href={article.url}> Read full article here</a>
                <p>{article.description}</p>
                {article.urlToImage && (
                    <img
                        className="border border-black rounded-md"
                        src={article.urlToImage}
                    />
                )}
                <p className='text-sm font-medium text-gray-700 flex flex-col'>
                    {article.content}

                </p>
            </div>

        </div>
    );
}

export default Page;