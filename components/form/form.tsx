"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useActionState } from "react";
import { SubmitButton } from "./button";
import { toast } from "sonner";
import contactAction from "./action";

export function ContactForm() {
  const [state, formAction] = useActionState(contactAction, undefined);

  if (state?.success === true) {
    toast.success("The form is successfully submit.");
  } else {
    state?.errors.every((error) => {
      toast.error(error.message);
    });
  }

  return (
    <div className="mt-12 max-w-2xl mx-auto p-6 sm:p-8 bg-white dark:bg-gray-950 rounded-lg shadow-lg">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Fill out the form below and well get back to you as soon as
            possible.
          </p>
        </div>

        <form action={formAction} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input
                name="first-name"
                id="first-name"
                placeholder="Enter your first name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input
                name="last-name"
                id="last-name"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                name="username"
                id="username"
                placeholder="Enter your username"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              rows={4}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              name="phone"
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="services">Services</Label>
            <Select name="service">
              <SelectTrigger>
                <SelectValue id="services" placeholder="Select services" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-design">Web Design</SelectItem>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="seo">SEO</SelectItem>
                <SelectItem value="social-media">Social Media</SelectItem>
                <SelectItem value="branding">Branding</SelectItem>
              </SelectContent>{" "}
            </Select>
          </div>
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
