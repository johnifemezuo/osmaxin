"use client";

import { ArrowRight } from "@/components/Icons/ArrowRight";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    budget: "",
    about: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full p-6 lg:p-12 bg-white rounded-2xl">
      <h1 className="text-2xl font-semibold mb-8 text-zinc-700">
        Fill in the contact form
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name Field */}
          <div className="space-y-2">
            <label className="block text-gray-600">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="E.g John Doe"
              className="w-full px-4 py-3 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              required
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-gray-600">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="E.g growthlobby@gmail.com"
              className="w-full px-4 py-3 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <label className="block text-gray-600">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="+000 000 000 000"
              className="w-full px-4 py-3 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
          </div>

          {/* Budget Field */}
          <div className="space-y-2">
            <label className="block text-gray-600">
              Budget <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full px-4 py-3 rounded-full text-zinc-700 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
              required
            >
              <option value="">What is your budget?</option>
              <option value="0-5000">$0 - $5,000</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="10000+">$10,000+</option>
            </select>
          </div>
        </div>

        {/* About Project Field */}
        <div className="space-y-2">
          <label className="block text-gray-600">
            About Project <span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder="Type here...."
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.about}
            onChange={(e) =>
              setFormData({ ...formData, about: e.target.value })
            }
            required
          />
        </div>

        {/* Privacy Policy */}
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-sm">
            By submitting the form I agree with the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center space-x-2"
          >
            <span>SUBMIT FORM</span>
            <div className="bg-white place-content-center rounded-full w-10 h-10 grid place- text-white content-center">
              <ArrowRight className="text-primary" />
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
