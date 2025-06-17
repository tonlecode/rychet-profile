import React from "react";
import types from "../assets/edu/types.png";
import home from "../assets/edu/home.png";
import book from "../assets/edu/book.png";
import news from "../assets/edu/news.png";
import setting from "../assets/edu/setting.png";
import ai from "../assets/edu/ai.png";
import chat from "../assets/edu/chat.png";

function InfoSection({ image, title, color, description, items }) {
  return (
    <div className="bg-[#1E2327] max-w-6xl mx-auto rounded-2xl p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center shadow-xl hover:shadow-orange-500/30 transition duration-300">
      {/* Image */}
      <div className="rounded-2xl overflow-hidden shadow-md flex justify-center">
        <img
          src={image}
          alt="Section"
          className="w-full max-w-xs object-contain"
        />
      </div>

      {/* Text */}
      <div>
        <h2 className={`text-2xl md:text-4xl text-center font-bold ${color} mb-6`}>
          {title}
        </h2>
        <p className="text-white mb-6 text-lg leading-relaxed">
          {description}
        </p>
        <ul className="list-disc pl-6 space-y-3 text-white text-base">
          {items.map((item, idx) => (
            <li key={idx}>
              <strong className={`${color}`}>{item.label}:</strong> {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="flex justify-center my-10">
      <div className="w-24 h-1 bg-orange-500 rounded-full" />
    </div>
  );
}

function EduDT() {
  const contentItems = [
    { label: "Buddhism", text: "Access Buddhist teachings and spiritual content." },
    { label: "Knowledge", text: "Explore educational material to improve your skills and understanding." },
    { label: "English", text: "Practice and learn English with videos and interactive resources." },
    { label: "Podcasts", text: "Listen to educational and motivational podcasts anytime." },
    { label: "Technology", text: "Stay informed about the latest tech trends and digital tools." },
    { label: "Cartoons", text: "Enjoy fun and educational animated content suitable for all ages." },
  ];

  const homeItems = [
    { label: "Quick Access", text: "Instantly reach your favorite content types." },
    { label: "Personalized Feed", text: "Suggestions based on your previous learning." },
    { label: "Search Bar", text: "Easily find any topic or content category." },
    { label: "Trending Topics", text: "See what’s currently popular and engaging." },
  ];

  return (
    <div className="py-16 px-6 md:px-20 bg-[#121517] min-h-screen">
      <h1 className="text-white text-4xl font-bold text-center mb-12">
        Welcome to <span className="text-orange-500">EduJourney</span>
      </h1>

      <InfoSection
        image={types}
        title="Types of Educational Content"
        color="text-blue-400"
        description="Explore categories like Buddhism, Knowledge, English, Podcasts, and more—each designed to support Cambodian learners."
        items={contentItems}
      />

      <Divider />

      <InfoSection
        image={ai}
        title="AI-Powered Learning"
        color="text-pink-400"
        description="This built-in AI chatbot helps learners search and explore content quickly, without needing to install any software."
        items={[
          { label: "Adaptive Lessons", text: "Personalized learning paths based on your progress." },
          { label: "Smart Recommendations", text: "AI suggests relevant content based on your interests." },
          { label: "Interactive Quizzes", text: "Test your knowledge with dynamic AI quizzes." },
        ]}
      />

      <Divider />

      <InfoSection
        image={chat}
        title="Chat & Interaction"
        color="text-yellow-400"
        description="Connect with peers, join study groups, and engage in meaningful educational discussions."
        items={[
          { label: "Group Chats", text: "Collaborate in group discussions and share insights." },
          { label: "Direct Messaging", text: "Have private conversations with fellow learners." },
          { label: "Community Forums", text: "Participate in forums on various educational topics." },
        ]}
      />

      <Divider />

      <InfoSection
        image={home}
        title="Home Screen Overview"
        color="text-green-400"
        description="The main dashboard includes quick links, trending content, and personalized learning suggestions."
        items={homeItems}
      />

      <Divider />

      <InfoSection
        image={book}
        title="Digital Library"
        color="text-purple-400"
        description="Access digital books, articles, and study resources. Each reading includes a summary of key points to guide you."
        items={homeItems}
      />

      <Divider />

      <InfoSection
        image={news}
        title="Educational News"
        color="text-cyan-400"
        description="Stay informed about the latest in education, events, and innovation across Cambodia and globally."
        items={homeItems}
      />

      <Divider />

      <InfoSection
        image={setting}
        title="Customize Your Learning"
        color="text-red-400"
        description="Adjust your preferences, filter your content, and configure accessibility settings to match your needs."
        items={homeItems}
      />
    </div>
  );
}

export default EduDT;
