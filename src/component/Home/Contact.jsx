import React from "react";
import Container from "../sharedComponent/Container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import toast from "react-hot-toast";
export default function Contact() {
  return (
    <Container>
      <div className="my-36 flex gap-10 px-14 py-14">
        <div className="flex-1 space-y-2">
          <h1 className="text-4xl">Get in Touch for Medical Assistance</h1>
          <p className="text-lg">Have questions about our medical camp? Need assistance or want to volunteer? Reach out to us, and we’ll be happy to help!</p>
        </div>
        <div className="space-y-3 flex-1">
          <div className="flex gap-10">
            <Input type="email" placeholder="Your Email..." />{" "}
            <Input type="number" placeholder="Your Phone..." />
          </div>
          <Input type="text" placeholder="Your Address..."/>
          <Textarea placeholder="Type your message here..." />
          <button type="button" className="px-4 py-2 bg-[#6756FF] text-white rounded" onClick={()=> {
          toast("Thaks for your time")
        }}>Submit</button>
        </div>
      </div>
    </Container>
  );
}
