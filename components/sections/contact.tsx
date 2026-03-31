"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;

    const formData = {
      email: (form.email as HTMLInputElement).value,
      subject: (form.subject as HTMLInputElement).value,
      message: (form.message as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data?.error ||
            "Failed to send message. Please contact support at 8700228181.",
        );
      }

      // ✅ SUCCESS TOAST (GREEN)
      toast({
        title: "Success",
        description:
          "Your message has been sent successfully. You will receive a response as soon as possible. For urgent queries, please contact us at 8700228181.",
        className: "bg-green-600 text-white",
        duration: 4000,
      });

      form.reset();
    } catch (err: any) {
      // ❌ ERROR TOAST (RED)
      toast({
        title: "Error",
        description:
          err?.message ||
          "Something went wrong. Please try again. If the issue persists, please contact support at 8700228181.",
        className: "bg-red-600 text-white",
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "vijbirhman2017@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      value: "+91 8700228181",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Location",
      value: "Gurgaon, India",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Get in touch with me for collaborations or opportunities
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{info.title}</h3>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name">Name</label>
                      <Input id="name" name="name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email">Email</label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject">Subject</label>
                    <Input id="subject" name="subject" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message">Message</label>
                    <Textarea id="message" name="message" rows={5} required />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
// "use client";

// import type React from "react";

// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Mail, Phone, MapPin, Send } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

// export default function Contact() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 },
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const form = e.target as HTMLFormElement;

//     const formData = {
//       // name: (form.name as HTMLInputElement).value,
//       email: (form.email as HTMLInputElement).value,
//       subject: (form.subject as HTMLInputElement).value,
//       message: (form.message as HTMLTextAreaElement).value,
//     };

//     try {
//       const res = await fetch("/api/send-mail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.error);
//       }

//       toast({
//         title: "Message sent!",
//         description: "Thank you for your message. I'll get back to you soon.",
//       });

//       form.reset();
//     } catch (err: any) {
//       toast({
//         title: "Error",
//         description: err.message || "Something went wrong",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="h-5 w-5 text-primary" />,
//       title: "Email",
//       value: "vijbirhman2017@gmail.com",
//     },
//     {
//       icon: <Phone className="h-5 w-5 text-primary" />,
//       title: "Phone",
//       value: "+91 8700228181",
//     },
//     {
//       icon: <MapPin className="h-5 w-5 text-primary" />,
//       title: "Location",
//       value: "Gurgaon, India",
//     },
//   ];

//   return (
//     <section id="contact" ref={sectionRef} className="py-20">
//       <div className="section-container">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="section-title">Contact Me</h2>
//           <p className="section-subtitle">
//             Get in touch with me for collaborations or opportunities
//           </p>
//         </motion.div>

//         <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="lg:col-span-1 space-y-6"
//           >
//             {contactInfo.map((info, index) => (
//               <Card key={index}>
//                 <CardContent className="flex items-center gap-4 p-6">
//                   <div className="p-3 bg-primary/10 rounded-full">
//                     {info.icon}
//                   </div>
//                   <div>
//                     <h3 className="font-medium">{info.title}</h3>
//                     <p className="text-muted-foreground">{info.value}</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="lg:col-span-2"
//           >
//             <Card>
//               <CardContent className="p-6">
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-2">
//                       <label htmlFor="name">Name</label>
//                       <Input id="name" name="name" required />
//                     </div>
//                     <div className="space-y-2">
//                       <label htmlFor="email">Email</label>
//                       <Input id="email" name="email" type="email" required />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label htmlFor="subject">Subject</label>
//                     <Input id="subject" name="subject" required />
//                   </div>

//                   <div className="space-y-2">
//                     <label htmlFor="message">Message</label>
//                     <Textarea id="message" name="message" rows={5} required />
//                   </div>

//                   <Button
//                     type="submit"
//                     className="w-full"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? (
//                       "Sending..."
//                     ) : (
//                       <span className="flex items-center gap-2">
//                         <Send className="h-4 w-4" />
//                         Send Message
//                       </span>
//                     )}
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
