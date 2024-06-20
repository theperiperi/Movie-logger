'use client'

import { updateWatch } from '../server-actions/updateWatch';
import { useState } from 'react';

export default function EditWatch({ watch }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: watch.title,
    rating: watch.rating,
    review: watch.review,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded-full font-semibold"
      >
        Edit
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
            <span
              onClick={() => setShowModal(false)}
              className="text-white text-2xl cursor-pointer float-right"
            >
              &times;
            </span>
            <form action={updateWatch} onSubmit={() => setShowModal(false)} className="space-y-4">
              <input type="hidden" name="id" value={watch.id} />
              <div className="space-y-2">
                <label htmlFor="title" className="block text-pink-400 font-semibold">
                  Brand
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="rating" className="block text-pink-400 font-semibold">
                  Model
                </label>
                <input
                  type="text"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="review" className="block text-pink-400 font-semibold">
                  Reference Number
                </label>
                <input
                  type="text"
                  name="review"
                  value={formData.review}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <button
                type="submit"
                className="bg-pink-500 text-white hover:bg-pink-700 px-4 py-2 rounded-full font-semibold"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
