"use client"

import { useForm } from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'
import { onboardingSchema } from "@/app/lib/schema"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import useFetch from "@/hooks/use-fetch"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { updateUser } from "@/actions/user"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"



const OnboardingForm = ({industries}) => {
    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const router = useRouter();
   const {
      loading: updateLoading,
      fn: updateUserFn,
      data: updateResult
   } = useFetch(updateUser)

    const {
        register,
         handleSubmit,
        formState:{errors},
        setValue,
        watch
    } 
        = useForm({
        resolver: zodResolver(onboardingSchema)
    })


    const watchIndustry = watch("industry");

    const onsubmit = async (values)=>{

        try {
            const formattedIndustry = `${values.industry}-${values.subIndustry.toLowerCase().replace(/ /g, "-")}`;
            await updateUserFn({
                ...values,
                industry: formattedIndustry
            })
        } catch (error) {
            
            console.error('onboarding error: ',error);
            
        }
    };

    useEffect(()=>{
        if(updateResult?.success && !updateLoading){
             toast.success("Profile Completed Successfully!");
             router.push("/dashboard");
             router.refresh();
        }
    },[updateResult, updateLoading])



  return (
    <div className="flex items-center justify-center">

<Card className={'w-full max-w-lg mt-10 mx-2 bg-gray-950/40'}>
  <CardHeader>
    <CardTitle className={'gradient-title text-4xl'}>Complete Your Profile</CardTitle>
    <CardDescription>Select your industry to get personalized career insights and recommendations.</CardDescription>
  </CardHeader>
  <CardContent>
    <form className="space-y-6" onSubmit={handleSubmit(onsubmit)}>
        <div className="space-y-2">
        <Label htmlFor="industry">Industry</Label>
    <Select
      onValueChange={(value)=>{
        setValue("industry",value);
        setSelectedIndustry(
            industries.find((ind)=>ind.id === value)
        );

        setValue("subIndustry","");
      }}
    >
  <SelectTrigger id="industry" className="w-full">
    <SelectValue className="bg-black" placeholder="Select an industry" />
  </SelectTrigger>
  <SelectContent className={'bg-black'}>
    {industries.map((industry)=>{

        return <SelectItem className={'py-3'} value={industry.id} key={industry.id}>{industry.name}</SelectItem>

    })}

  </SelectContent>
</Select>

{errors.industry && (
    <p className="text-sm text-red-500">{errors.industry.message}</p>
)}

</div>





     {watchIndustry && (
        <div className="space-y-2">
        <Label htmlFor="subIndustry">Specialization</Label>
    <Select
      onValueChange={(value)=>{
        setValue("subIndustry",value);
      }}
    >
  <SelectTrigger id="subIndustry" className="w-full">
    <SelectValue className="bg-black" placeholder="Select an industry" />
  </SelectTrigger>
  <SelectContent className={'bg-black'}>
    {selectedIndustry?.subIndustries.map((industry)=>{

        return <SelectItem className={'py-3'} value={industry} key={industry}>{industry}</SelectItem>

    })}

  </SelectContent>
</Select>

{errors.subIndustry && (
    <p className="text-sm text-red-500">{errors.subIndustry.message}</p>
)}

</div>

)}

<div className="space-y-2">
        <Label htmlFor="experience">Years Of Experience</Label>
        <Input id='experience'
         placeholder='Enter years in Number'
         type='number'
         min='0'
         max='50'
         {...register('experience')}
         />


{errors.experience && (
    <p className="text-sm text-red-500">{errors.experience.message}</p>
)}

</div>




<div className="space-y-2">
        <Label htmlFor="skills">Skills</Label>
        <Input id='skills'
         placeholder='e.g. python, javascript, c++, project management etc.'
         {...register('skills')}
         />
    <p className="text-sm ml-1 text-muted-foreground">
        Separate multiple skills with commas
    </p>

{errors.skills && (
    <p className="text-sm text-red-500">{errors.skills.message}</p>
)}

</div>



<div className="space-y-2">
        <Label htmlFor="bio">Professional Bio</Label>
        <Textarea id='bio'
         placeholder='Tell us about your professional background...'
         className={'h-32'}
         {...register('bio')}
         />
 

{errors.bio && (
    <p className="text-sm text-red-500">{errors.bio.message}</p>
)}

</div>

<Button type="submit" className={'w-full font-semibold cursor-pointer'} disabled={updateLoading}>
    {updateLoading?(
        <>
        <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
        Saving...
        </>
    ):"Complete Profile"}
    </Button>


    </form>
  </CardContent>

</Card>

    </div>
  )
}

export default OnboardingForm