"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast"; 
import React from "react";
import { z } from "zod";
import { useRouter } from "next/navigation"; 
import { eventSchema } from "@/lib/validations";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/FileUpload";
import { createEvent } from "@/lib/admin/actions/event";

interface Props extends Partial<Event> {
  type?: "create" | "update";
}

const EventForm = ({ type, ...event }: Props) => {
  const router = useRouter(); // ✅ Initialize Next.js router

  const form = useForm<z.infer<typeof eventSchema>>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      description: "",
      eventHost: "",
      category: "",
      eventDateTime: "",
      rating: 1,
      availableSpaces: 1,
      coverUrl: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof eventSchema>) => {
    console.log("Submitting values (before conversion):", values);
  
    if (!values.eventDateTime) {
      console.error(" Error: eventDateTime is missing!");
      return;
    }
  
    const formattedValues = {
      ...values,
      eventDateTime: new Date(values.eventDateTime).toISOString(),
    };
  
    console.log("Submitting values (after conversion):", formattedValues);
    
    const result = await createEvent(formattedValues);
    
    if (result.success) {
      toast({
        title: "Event Created 🎉",
        description: "Your event has been successfully created!",
      });

      
      router.push("/");

    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-black">
        
        {/* Event Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Event Title
              </FormLabel>
              <FormControl>
                <Input required placeholder="Event title" {...field} className="event-form_input" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Event Date & Time */}
        <FormField
          control={form.control}
          name="eventDateTime"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Event Date & Time
              </FormLabel>
              <FormControl>
                <Input
                  type="datetime-local"
                  required
                  value={field.value ?? ""}
                  onChange={(e) => {
                    console.log("Selected Date:", e.target.value);
                    field.onChange(e.target.value);
                  }}
                  className="event-form_input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Event Host */}
        <FormField
          control={form.control}
          name="eventHost"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Organiser
              </FormLabel>
              <FormControl>
                <Input required placeholder="Event organiser" {...field} className="event-form_input" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Event Category */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Category
              </FormLabel>
              <FormControl>
                <Input required placeholder="Event category" {...field} className="event-form_input" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Total Spaces */}
        <FormField
          control={form.control}
          name="availableSpaces"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Available spaces
              </FormLabel>
              <FormControl>
                <Input type="number" min={1} max={10000} required placeholder="Total Spaces" {...field} className="event-form_input" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Event Cover Image */}
        <FormField
          control={form.control}
          name="coverUrl"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Event Image
              </FormLabel>
              <FormControl>
                <FileUpload
                  type="image"
                  accept="image/*"
                  placeholder="Upload an event image"
                  folder="events/covers"
                  variant="light"
                  onFileChange={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Event Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Event Summary
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Event summary" {...field} rows={10} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="bg-black text-white w-full">
          {type === "update" ? "Update Event" : "Add Event"}
        </Button>
      </form>
    </Form>
  );
};

export default EventForm;
