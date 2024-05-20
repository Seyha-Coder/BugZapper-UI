import Image from "next/image";
import Login from "./(auth)/login/page";
import HistoryCard from "@/components/HistoryCard";
import ProjectCard from "@/components/ProjectCard";
import MemberCard from "@/components/MemberCard";
import FeedBackCard from "@/components/FeedBackCard";
import TaskCard from "@/components/TaskCard";

export default function Home() {
  return (
    <main className="w-full h-screen p-6">
      {/* <Login/> */}
      <TaskCard/>
      
    </main>
  );
}
