import React, { useState } from "react";
import axios from "axios";
import defaultImage from "../assets/andrea-de-santis-zwd435-ewb4-unsplash.jpg";
import Loader from "../helper/Loader";

function CreateImage() {
  const [image, setImage] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:4000/api/genimage", {
        prompt: prompt,
      });
      setLoading(false);
      console.log(response.data);
      const base64 = response.data.image;
      setImage(base64);

      console.log("IMAGE", base64);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-24  w-full flex justify-center items-center">
      <div className="w-[90%] ">
        <h2 className="font-bold text-3xl mt-10 text-text-primary">
          Covert your words to images for free.
        </h2>

        <div className="mt-10 flex flex-row-reverse justify-between  h-screen  ">
          <form
            className="  w-[40%] rounded-lg shadow-xl p-4 mr-14"
            onSubmit={generateImage}
          >
            <div>
              <textarea
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full  p-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg shadow-xl"
                placeholder="Enter your prompt to generate your image"
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center py-3 px-4 mt-6 ml-2 text-sm font-medium text-white bg-primary-blue rounded-lg "
            >
              Generate
            </button>
          </form>

          <div className="w-[50%] flex justify-center items-center  bg-gray-100 rounded-lg p-6">
            {loading ? (
              <Loader />
            ) : (
              <img
                src={`data:image/jpeg;base64,${image}`}
                alt=""
                className="w-full rounded-lg shadow-2xl "
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateImage;
