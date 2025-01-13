import { useState } from "react";
import form_2 from "../assets/form_2.png";
import logo_html from "../assets/logo_html.svg";
import logo_jquery from "../assets/logo_jquery.svg";
import logo_react from "../assets/logo_react.svg";
import logo_vue from "../assets/logo_vue.svg";
import { ChevronRight } from "lucide-react";

const SetupEasy = () => {
  const [activeTab, setActiveTab] = useState("HTML");

  const tabContent = {
    HTML: {
      title: "Easiest way to setup your HTML form.",
      snippet: `<form action="https://formcarry.com/s/{Your Form ID}"
                method="POST" enctype="multipart/form-data">
                <input type="email" name="email">
                <textarea name="message"></textarea>
                <button type="submit">Submit</button>
                </form>`,
      image: logo_html,
    },
    jQuery: {
      title: "Easiest way to setup your jQuery form.",
      snippet: `<form 
                class="ajaxForm" 
                action="https://formcarry.com/s/{Your Form ID}" 
                method="POST" 
                accept-charset="UTF-8" 
                enctype="multipart/form-data">
                <input type="file" name="picture">
                <input type="submit" value="Send">
                </form>

                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
                <script>
                $(function(){
                    $(".ajaxForm").submit(function(e){
                    e.preventDefault();
                    var href = $(this).attr("action");
                    $.ajax({
                        type: "POST",
                        dataType: "json",
                        url: href,
                        data: $(this).serialize(),
                        success: function(response){
                        if(response.status == "success"){
                            alert("We received your submission, thank you!");
                        }else{
                            alert("An error occured: " + response.message);
                        }
                        }
                    });
                    });
                });
                </script>`,
      image: logo_jquery,
    },
    React: {
      title: "Easiest way to setup your React form.",
      snippet: `import React from 'react';
                import { useForm } from '@formcarry/react';

                function MyFormcarry() {
                const {state, submit} = useForm({
                    id: 'Your Form ID'
                });

                if (state.submitted) {
                    return <div>Thank you! We received your submission.</div>;
                }

                return (
                    <form onSubmit={submit}>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email"/>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message"/>
                    <button type="submit">Send</button>
                    </form>
                );
                }`,
      image: logo_react,
    },
    Vue: {
      title: "Easiest way to setup your Vue form.",
      snippet: `<template>
                <form @submit.prevent="submitForm">
                    <label>
                    <span>Email</span>
                    <input type="email" name="email" v-model="email" />
                    </label>
                    <label>
                    <span>Message</span>
                    <textarea name="message" v-model="message"></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
                </template>

                <script>
                export default {
                data() {
                    return {
                    email: '',
                    message: '',
                    endpoint: 'https://formcarry.com/s/{Your Form ID}',
                    }
                },
                methods: {
                    async submitForm() {
                    const data = {
                        email: this.email,
                        message: this.message,
                    }
                    const response = await this.$axios.post(this.endpoint, data)
                    },
                },
                }
                </script>`,
      image: logo_vue,
    },
  };

  return (
    <div className="w-full bg-white py-10 relative">
      {/* Image d'arrière-plan */}
      <div
        className="absolute inset-0 flex justify-center items-center pointer-events-none"
        aria-hidden="true"
      >
        <img
          src={form_2}
          alt="Background Form"
          className="max-w-full max-h-[400px] object-contain"
        />
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <p className="text-purple-600 text-sm font-semibold uppercase mb-2">
          Setup, easy-peasy!
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {tabContent[activeTab].title}
        </h1>
        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-6">
          Don’t worry about emails, spam checking, integrations, and form issues
          ever. Code your front-end, add your unique formcarry URL, and we’ll
          handle the rest. Within literally just 3 minutes, you can have a fully
          functional form for any platform.
        </p>

        {/* Groupe d'onglets */}
        <div className="flex flex-wrap justify-center items-center mb-8 p-1 rounded-full border border-gray-300 bg-gray-100 w-full md:w-max mx-auto">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "bg-white text-gray-900 shadow-md rounded-full"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <img
                src={tabContent[tab].image}
                alt={`${tab} icon`}
                className="h-5 w-5 md:h-6 md:w-6 mr-2"
              />
              {tab}
            </button>
          ))}
        </div>

        {/* Section Code */}
        <div className="bg-gray-100 rounded-lg p-6 shadow-md max-w-4xl mx-auto overflow-auto">
          <pre
            className="text-left text-sm md:text-base text-gray-800 overflow-x-auto whitespace-pre-line"
            style={{
              maxHeight: "300px",
              overflowY: "auto",
              overflowX: "auto",
            }}
          >
            <code>{tabContent[activeTab].snippet}</code>
          </pre>
        </div>
        {/* Bouton centré en bas */}
        <div className="flex justify-center mt-6">
          <button
            className="px-4 md:px-6 py-2 text-sm md:text-base bg-[#0e0b3d] text-white rounded-full hover:bg-[#535479] transition-all duration-200 flex items-center"
          >
            {activeTab === "HTML"
              ? "Setup HTML Form"
              : activeTab === "jQuery"
              ? "Setup jQuery Form"
              : activeTab === "React"
              ? "Setup React Form"
              : "Setup Vue Form"}
            {/* Icône flèche droite */}
            <ChevronRight className="ml-2 h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetupEasy;