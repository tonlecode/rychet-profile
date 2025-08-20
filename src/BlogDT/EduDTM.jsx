import React from "react";
import types from "../assets/edu/types.png";
import home from "../assets/edu/home.png";
import book from "../assets/edu/book.png";
import news from "../assets/edu/news.png";
import setting from "../assets/edu/setting.png";
import ai from "../assets/edu/ai.png";
import chat from "../assets/edu/chat.png";
import HeaderM from "../components/HeaderM";

// Reusable Section Component
function InfoSection({ image, title, color, description, items }) {
  return (
    <div className="font-sans px-4 sm:px-6">
   
      <div className="max-w-4xl mx-auto rounded-2xl p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white shadow-md">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-[80%] max-w-[15rem] sm:max-w-xs rounded-xl shadow-md object-contain"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2
            className={`text-xl sm:text-2xl md:text-3xl font-bold ${color} mb-4 text-center md:text-left`}
          >
            {title}
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed text-center md:text-left">
            {description}
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
            {items.map((item, idx) => (
              <li key={idx}>
                <span className={`${color} font-medium`}>{item.label}:</span>{" "}
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Divider Component
function Divider() {
  return (
    <div className="flex justify-center my-12">
      <div className="w-24 h-1 bg-orange-500 rounded-full" />
    </div>
  );
}

function EduDTM() {
  // Define all the content items for each section
  const contentItems = [
    { label: "Buddhism", text: "Access Buddhist teachings and spiritual content." },
    { label: "Knowledge", text: "Explore educational material to improve your skills and understanding." },
    { label: "English", text: "Practice and learn English with videos and interactive resources." },
    { label: "Podcasts", text: "Listen to educational and motivational podcasts anytime." },
    { label: "Technology", text: "Stay informed about the latest tech trends and digital tools." },
    { label: "Cartoons", text: "Enjoy educational and English-strengthening animated content suitable for all ages." },
  ];

  const homeItems = [
    { label: "Quick Access", text: "Instantly reach your favorite content types." },
    { label: "Personalized Feed", text: "Suggestions based on your previous learning." },
    { label: "Search Bar", text: "Easily find any topic or content category." },
    { label: "Trending Topics", text: "See what's currently popular and engaging." },
  ];

  const bookItems = [
    { label: "Summary of Key Points", text: "Understand the main ideas quickly." },
    { label: "Highlighted Concepts", text: "Grasp the core lessons and insights." },
    { label: "Study Guides", text: "Reinforce your learning with questions and notes." },
    { label: "Search & Filter Tools", text: "Find exactly what you need." },
    { label: "Multi-device Access", text: "Read anytime, anywhere." },
  ];

  const newsItems = [
    { label: "Brief Summaries", text: "Quickly grasp the key events and messages." },
    { label: "Topic Categories", text: "Politics, technology, education, health, and more." },
    { label: "Fact-Checked Sources", text: "Prioritizing accuracy and credibility." },
    { label: "Search & Filter Tools", text: "Find exactly what you need." },
    { label: "Context & Analysis", text: "Understand the why behind the headlines." },
  ];

  const settingItems = [
    { label: "Update Profile Info", text: "Name, email, phone, and bio." },
    { label: "Manage Privacy Settings", text: "Control what info is visible." },
    { label: "Notification Preferences", text: "Enable or disable push & email alerts." },
    { label: "Personalization Options", text: "Adjust themes or layout (if available)." },
    { label: "Language & Region", text: "Set your preferred display language." },
    { label: "Sync & Backup", text: "Keep your data safe and up-to-date across devices." },
  ];

  return (
    <div>
      <HeaderM />
      <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 md:px-20 mt-[-40rem]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-center text-blue-600 mb-10 mt-[5rem] leading-snug">
          Welcome to <span className="text-orange-500">EduJourney</span>
        </h1>

        {/* Info Section 1: Types of Educational Content */}
        <InfoSection
          image={types}
          title="Types of Educational Content"
          color="text-blue-400"
          description="Explore categories like Buddhism, Knowledge, English, Podcasts, and more—each designed to support Cambodian learners."
          items={contentItems}
        />

        <Divider />

        {/* Info Section 2: AI-Powered Learning */}
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

        {/* Info Section 3: Chat & Interaction */}
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

        {/* Info Section 4: Home Screen Overview */}
        <InfoSection
          image={home}
          title="Home Screen Overview"
          color="text-green-400"
          description="The main dashboard includes quick links, trending content, and personalized learning suggestions."
          items={homeItems}
        />

        <Divider />

        {/* Info Section 5: Digital Library */}
        <InfoSection
          image={book}
          title="Digital Library"
          color="text-purple-400"
          description="Explore a growing library of digital books, scholarly articles, and learning materials across a wide range of subjects."
          items={bookItems}
        />

        <Divider />

        {/* Info Section 6: Educational News */}
        <InfoSection
          image={news}
          title="Educational News"
          color="text-cyan-400"
          description="Access reliable, up-to-date news articles from trusted sources, covering global and local events."
          items={newsItems}
        />

        <Divider />

        {/* Info Section 7: Customize Your Learning */}
        <InfoSection
          image={setting}
          title="Customize Your Learning"
          color="text-red-400"
          description="Take full control of your account preferences and notifications. The Settings page lets you:"
          items={settingItems}
        />

        <div className="h-10 sm:h-16"></div>
      </div>
    </div>
  );
}

export default EduDTM;
