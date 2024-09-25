import Header from "../layout/Header"
import Fotter from "../layout/Fotter"

function Products() {
    return (

        <>
            <Header />
            <section className="dark:bg-gray-100 dark:text-gray-800 mt-10">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">Lorem ipsum dolor sit. <span>SubTitle</span>
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis consequuntur error quo, eaque dignissimos voluptas! Soluta iure excepturi nihil?</p>
                    <div className="flex flex-wrap justify-center">
                        <button className="px-8 py-3 m-2 text-lg   rounded-md bg-gray-500 text-black">Get started</button>
                        <button className="px-8 py-3 m-2 text-lg border rounded-md text-white bg-black">Learn more</button>
                    </div>
                </div>
            </section>

            <div className="container mx-auto mt-10 mb-10">
                <div className="flex flex-wrap">
                    <div className="w-1/2 p-2">
                        <img src="https://picsum.photos/200/300" alt="Image 1" className=" w-full h-96 rounded" />
                    </div>
                    <div className="w-1/2 p-2">
                        <img src="https://picsum.photos/200/300" alt="Image 2" className="w-full h-96 rounded" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="flex flex-col items-start">
                    <h5 className="font-semibold">Heading</h5>
                    <h6 className="text-gray-500 font-normal">Subtitle</h6>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    <div className="border-2 card rounded p-4 font-semibold flex flex-col ">
                        <p className="text-left">"Quote 1"</p>
                        <div className="flex flex-col">
                            <p className="text-center text-shadow-md">Title</p>
                            <p className="text-center font-normal">Description</p>
                        </div>
                    </div>

                    <div className="border-2 card rounded p-4 font-semibold flex flex-col">
                        <p className="text-left">"Quote 2"</p>
                        <div className="flex flex-row items-center mt-2">
                            <img src="https://i.pravatar.cc/300" className="w-10 rounded-full mr-2" alt="" />
                            <div className="flex flex-col">
                                <p className="text-center text-shadow-md">Title</p>
                                <p className="text-center font-normal text-gray-300">Description</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-2 card rounded p-4 font-semibold flex flex-col">
                        <p className="text-left">"Quote 3"</p>
                        <div className="flex flex-row items-center mt-2">
                            <img src="https://i.pravatar.cc/300" className="w-10 rounded-full mr-2" alt="" />
                            <div className="flex flex-col">
                                <p className="text-center text-shadow-md">Title</p>
                                <p className="text-center font-normal text-gray-300">Description</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-2 card rounded p-4 font-semibold flex flex-col">
                        <p className="text-left">"Quote 4"</p>
                        <div className="flex flex-row items-center mt-2">
                            <img src="https://i.pravatar.cc/300" className="w-10 rounded-full mr-2" alt="" />
                            <div className="flex flex-col">
                                <p className="text-center text-shadow-md">Title</p>
                                <p className="text-center font-normal text-gray-300">Description</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-2 card rounded p-4 font-semibold flex flex-col">
                        <p className="text-left">"Quote 5"</p>
                        <div className="flex flex-row items-center mt-2">
                            <img src="https://i.pravatar.cc/300" className="w-10 rounded-full mr-2" alt="" />
                            <div className="flex flex-col">
                                <p className="text-center  text-shadow-md">Title</p>
                                <p className="text-center font-normal text-gray-300">Description</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-2 card rounded p-4 font-semibold flex flex-col">
                        <p className="text-left">"Quote 6"</p>
                        <div className="flex flex-row items-center mt-2">
                            <img src="https://i.pravatar.cc/300" className="w-10 rounded-full border-orange-700 mr-2" alt="" />
                            <div className="flex flex-col">
                                <p className=" text-shadow-md">Title</p>
                                <p className="font-normal text-gray-300">Description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container  mt-5">
                <div className="flex flex-col items-start">
                    <h5 className="font-semibold">Heading</h5>
                    <h6 className="text-gray-500 font-normal">Subtitle</h6>
                </div>

                <div className="border-2 flex  mt-5">
                    <img src="https://i.pravatar.cc/300" alt="" className="w-56 m-5" />
                    <p className="font-semibold m-10 text-left">
                        Title <br />
                        <span className="font-normal text-gray-300">
                            Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short <br /> story
                        </span>
                        <br />
                        <button type="button" className="p-1 mt-2 rounded text-black bg-gray-500 border font-normal">Button</button>
                    </p>
                </div>
                <div className="border-2 flex  mt-5">
                    <img src="https://i.pravatar.cc/300" alt="" className="w-56 m-5" />
                    <p className="font-semibold m-10 text-left">
                        Title <br />
                        <span className="font-normal text-gray-300">
                            Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short <br /> story
                        </span>
                        <br />
                        <button type="button" className="p-1 mt-2 rounded text-black bg-gray-500 border font-normal">Button</button>
                    </p>
                </div>
                <div className="border-2 flex mt-5">
                    <img src="https://i.pravatar.cc/300" alt="" className="w-56 m-5" />
                    <p className="font-semibold m-10 text-left">
                        Title <br />
                        <span className="font-normal text-gray-300">
                            Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short <br /> story
                        </span>
                        <br />
                        <button type="button" className="p-1 mt-2 rounded text-black bg-gray-500 border font-normal">Button</button>
                    </p>
                </div>
            </div>

            <div className="container mt-5">
                <div className="items-start">
                    <h5 className="font-semibold">Heading</h5>
                    <h6 className="text-gray-500 font-normal">Subtitle</h6>
                </div>
                <div class="grid grid-cols-3 gap-4">
                    <div class="border-2 p-3 m-2">
                        <img src="https://i.pravatar.cc/300" alt="" class="w-40	" />
                        <p class="font-semibold m-10 text-left">
                            Title 1 <br />
                            <span class="font-normal text-gray-300">
                                Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short <br /> story
                            </span>
                        </p>
                    </div>
                    <div class="border-2 p-3 m-2">
                        <img src="https://i.pravatar.cc/300" alt="" class="w-40	" />
                        <p class="font-semibold m-10 text-left">
                            Title 2 <br />
                            <span class="font-normal text-gray-300">
                                Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short <br /> story
                            </span>
                        </p>
                    </div>
                    <div class="border-2 p-3 m-2">
                        <img src="https://i.pravatar.cc/300" alt="" class="w-40	" />
                        <p class="font-semibold m-10 text-left">
                            Title 3 <br />
                            <span class="font-normal text-gray-300">
                                Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short <br /> story
                            </span>
                        </p>
                    </div>
                    <div class="border-2 p-3 m-2">
                        <img src="https://i.pravatar.cc/300" alt="" class="w-40	" />
                        <p class="font-semibold m-10 text-left">
                            Title 4 <br />
                            <span class="font-normal text-gray-300">
                                Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short <br /> story
                            </span>
                        </p>
                    </div>
                    <div class="border-2 p-3 m-2">
                        <img src="https://i.pravatar.cc/300" alt="" class="w-40	" />
                        <p class="font-semibold m-10 text-left">
                            Title 5 <br />
                            <span class="font-normal text-gray-300">
                                Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short <br /> story
                            </span>
                        </p>
                    </div>
                    <div class="border-2 p-3 m-2">
                        <img src="https://i.pravatar.cc/300" alt="" class="w-40	" />
                        <p class="font-semibold m-10 text-left">
                            Title 6 <br />
                            <span class="font-normal text-gray-300">
                                Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short <br /> story
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <Fotter />
        </>
    )
}
export default Products