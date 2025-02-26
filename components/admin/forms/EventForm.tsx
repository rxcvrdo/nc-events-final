"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, FieldValue, FieldValues, Path, SubmitHandler, useForm, UseFormReturn } from "react-hook-form"

import {toast} from "@/hooks/use-toast"

import React from 'react'
import { z, ZodType } from "zod"


import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { useRouter } from "next/navigation";
import { eventSchema } from "@/lib/validations";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/FileUpload";



interface Props extends Partial<Event>  {
 type?: 'create'| 'update'}

const EventForm = ({
  type,
 ...event
}: Props) => {
  const router = useRouter()

  
  const form = useForm<z.infer<typeof eventSchema>>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
        title: '',
description: '',
organiser: '',
category: '',
rating: 1,
totalSize: 1,
coverUrl: '',
    }
  })

  
   const onSubmit = async (values: z.infer<typeof eventSchema>) => {}


  return (
    
    <Form  {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-black">
        <FormField
          control={form.control}
          name={"title"}
          render={({ field }) => (
            <FormItem className='flex flex-col gap-1' >
              <FormLabel className="text-base font-normal text-dark-500">
                Event Title
              </FormLabel>
              <FormControl>
                
                <Input 
                required 
                placeholder="Event title"
                {...field}
                 className="event-form_input"
                 />
              </FormControl>
              
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"organiser"}
          render={({ field }) => (
            <FormItem className='flex flex-col gap-1' >
              <FormLabel className="text-base font-normal text-dark-500">
                Organiser
              </FormLabel>
              <FormControl>
                
                <Input 
                required 
                placeholder="Event organiser"
                {...field}
                 className="event-form_input"
                 />
              </FormControl>
              
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"category"}
          render={({ field }) => (
            <FormItem className='flex flex-col gap-1' >
              <FormLabel className="text-base font-normal text-dark-500">
                Category
              </FormLabel>
              <FormControl>
                
                <Input 
                required 
                placeholder="Event category"
                {...field}
                 className="event-form_input"
                 />
              </FormControl>
              
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"totalSize"}
          render={({ field }) => (
            <FormItem className='flex flex-col gap-1' >
              <FormLabel className="text-base font-normal text-dark-500">
                Total space
              </FormLabel>
              <FormControl>
                
                <Input 
                type='number'
                min={1}
                max={10000}
                required 
                placeholder="Total Space of Event"
                {...field}
                 className="event-form_input"
                 />
              </FormControl>
              
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"coverUrl"}
          render={({ field }) => (
            <FormItem className='flex flex-col gap-1' >
              <FormLabel className="text-base font-normal text-dark-500">
                Event Image
              </FormLabel>
              <FormControl>
                
                <FileUpload type="image" accept="image/*" placeholder="Upload a image for event" folder="events/covers"variant="light" onFileChange={field.onChange} value={field.value} /> 
              </FormControl>
              
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"description"}
          render={({ field }) => (
            <FormItem className='flex flex-col gap-1' >
              <FormLabel className="text-base font-normal text-dark-500">
                Event Summary
              </FormLabel>
              <FormControl>
                
                
              </FormControl>
              <Textarea placeholder="Event summary"
               {...field} 
               rows={10} />

              
              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-black text-white w-full ">
          Add Event
        </Button>
    </form>
  </Form>

  )
}

export default EventForm