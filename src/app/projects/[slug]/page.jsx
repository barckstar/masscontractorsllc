"use client";
import { useParams } from "next/navigation";
import data from "@/lib/data.json";
import PostContent from "@/components/postContent";
import FillNav from "@/components/FillNav";

export default function Post() {
  return (
    <>
      <PostContent />
    </>
  );
}
