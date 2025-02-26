"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, FieldValue, FieldValues, Path, SubmitHandler, useForm, UseFormReturn } from "react-hook-form"

import {toast} from "@/hooks/use-toast"

import React from 'react'
import { z, ZodType } from "zod"

import { Button } from "@/components/ui/button"
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
import Link from "next/link";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";
import { Result } from "postcss";
import { title } from "process";
import { useRouter } from "next/navigation";



interface Props<T extends FieldValues> {
  schema:ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{success: boolean, error? :string}>
  type: "SIGN_IN" | "SIGN_UP"; 
}

const AuthForm = <T extends FieldValues>({
  type,
  schema, 
  defaultValues, 
  onSubmit,
}: Props<T>) => {
  const router = useRouter()

  const isSignIn = type === "SIGN_IN"
  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>
  })

  const handleSubmit: SubmitHandler<T> = async (data) => {
    const result = await  onSubmit(data) 

    if(result.success){
      toast({
        title:"success",
        description: isSignIn ? "You have successfully sign in." :"you have successfully signed up"
      })
    

    router.push("/")
  } else {
    toast({
      title: `Error ${isSignIn ? "Signing in" : "signing up"}`,
      description: result.error ?? "an error occured",
      variant: "destructive"
    })
  }
}

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-black">
        {isSignIn ? 'Welcome back to  to Nc-events' : 'Create your NC-events Profile '}
      </h1>
      <p className="text-dark-100">
        {isSignIn ? "Please provide a valid Username or email address"  : "Please complete all fields in order to gain access"}
      </p>
    <Form  {...form}>
    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 w-full text-black">
      {Object.keys(defaultValues).map((field) => (
        <FormField
        key={field}
          control={form.control}
          name={field as Path<T>}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">{FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}</FormLabel>
              <FormControl>
                
                <Input required type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]}
                 {...field}
                 className="form-input"
                 />
              </FormControl>
              
              
              <FormMessage />
            </FormItem>
          )}
        />

      ))}
      <Button type="submit" className="form-btn">{isSignIn ? 'Sign in' : 'Sign up'}</Button>
    </form>
  </Form>
  <p className="text-center text-base font-medium text-black">
    {isSignIn? "New to Nc-events?" : "Already have an account?"}
    <Link href={isSignIn ? "sign-up" : "sign-in"} className="font-bold  text-blue-600 underline focus:underline">
     {isSignIn ? " create an account" : " Sign in"}
    
    </Link>

  </p>
  </div>
  )
}

export default AuthForm