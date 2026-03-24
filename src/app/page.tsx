"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Code, Mail, Star, User, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLargeSizeLargeTitles"
        background="fluid"
        cardStyle="gradient-radial"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Skills",
          id: "skills",
        },
        {
          name: "Projects",
          id: "projects",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
      ]}
      brandName="Dmitry Kudin"
      button={{
        text: "Contact",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Dmitry Kudin"
      description="Developer GAY - Crafting innovative solutions with passion and precision. Building engaging web experiences that make an impact."
      buttons={[
        {
          text: "Explore My Work",
          href: "#projects",
        },
        {
          text: "Get in Touch",
          href: "#contact",
        },
      ]}
      buttonAnimation="opacity"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AO9gCSLoDdKgboXV6NtXXgvfy1/a-confident-full-stack-developer-dmitry--1774369785713-b268e4f3.png"
      imageAlt="Developer Dmitry Kudin coding on a laptop with a modern UI"
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      animationType="blur-reveal"
      title="About Me"
      description="I'm a passionate full-stack developer with expertise in modern web technologies, building robust, scalable, and user-friendly applications that solve real-world problems. My journey in tech is driven by curiosity, continuous learning, and a commitment to excellence. I thrive on new challenges and collaborations, always seeking to refine my craft and deliver impactful digital experiences."
      tag="Meet Dmitry"
      tagIcon={User}
      tagAnimation="opacity"
      buttonAnimation="opacity"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AO9gCSLoDdKgboXV6NtXXgvfy1/a-professional-and-friendly-portrait-of--1774369786359-e3e1a1e6.png"
      imageAlt="Portrait of Dmitry Kudin, a developer"
    />
  </div>

  <div id="skills" data-section="skills">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Front-End Development",
          description: "Building intuitive and dynamic user interfaces with React, Next.js, and modern CSS frameworks, ensuring seamless user experiences across all devices.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AO9gCSLoDdKgboXV6NtXXgvfy1/an-abstract-illustration-representing-fr-1774369786795-26625928.png",
          imageAlt: "Front-end development illustration",
        },
        {
          title: "Back-End Development",
          description: "Designing and implementing scalable server-side applications using Node.js, Python, and robust database solutions like PostgreSQL and MongoDB.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AO9gCSLoDdKgboXV6NtXXgvfy1/an-abstract-illustration-representing-ba-1774369786427-cb143a25.png",
          imageAlt: "Back-end development illustration",
        },
        {
          title: "DevOps & Cloud",
          description: "Streamlining deployment pipelines, managing cloud infrastructure on AWS/Azure, and implementing containerization with Docker and Kubernetes for efficient operations.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AO9gCSLoDdKgboXV6NtXXgvfy1/an-abstract-illustration-depicting-devop-1774369785480-eb2d230c.png",
          imageAlt: "DevOps and cloud computing illustration",
        },
      ]}
      title="My Skills & Expertise"
      description="Proficient in a wide array of development technologies, I bring a versatile skill set to every project. From front-end design to back-end architecture, I ensure robust and efficient solutions that exceed expectations."
      tag="My Capabilities"
      tagIcon={Zap}
      tagAnimation="opacity"
      buttonAnimation="opacity"
    />
  </div>

  <div id="projects" data-section="projects">
      <ProductCardTwo
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          brand: "Web Platform",
          name: "E-Commerce Reimagined",
          price: "N/A",
          rating: 5,
          reviewCount: "Case Study",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AO9gCSLoDdKgboXV6NtXXgvfy1/a-clean-modern-e-commerce-platform-dashb-1774369785291-7c05a379.png",
          imageAlt: "E-commerce platform dashboard",
        },
        {
          id: "2",
          brand: "SaaS Solution",
          name: "Analytics Dashboard",
          price: "N/A",
          rating: 5,
          reviewCount: "Live Demo",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AO9gCSLoDdKgboXV6NtXXgvfy1/a-sophisticated-saas-application-dashboa-1774369786249-ce7b2024.png",
          imageAlt: "SaaS analytics dashboard",
        },
        {
          id: "3",
          brand: "Mobile App",
          name: "Productivity Companion",
          price: "N/A",
          rating: 5,
          reviewCount: "View on App Store",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AO9gCSLoDdKgboXV6NtXXgvfy1/a-sleek-mobile-application-interface-sho-1774369786566-5b704b8e.png",
          imageAlt: "Mobile app interface",
        },
      ]}
      title="My Projects"
      description="Explore a selection of my recent work, showcasing my ability to tackle diverse technical challenges and deliver high-quality, impactful applications that delight users."
      tag="Portfolio"
      tagIcon={Code}
      tagAnimation="opacity"
      buttonAnimation="opacity"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          date: "March 2023",
          title: "Outstanding dedication and skill",
          quote: "Dmitry delivered beyond expectations on our complex web application. His problem-solving skills and attention to detail are truly outstanding. A pleasure to work with!",
          tag: "Web Development",
          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AO9gCSLoDdKgboXV6NtXXgvfy1/a-professional-diverse-avatar-image-of-a-1774369785042-981915fd.png",
          avatarAlt: "Sarah Johnson avatar",
        },
        {
          id: "2",
          name: "Michael Chen",
          date: "July 2023",
          title: "Reliable and innovative partner",
          quote: "Working with Dmitry was a fantastic experience. He brought fresh ideas and executed flawlessly, transforming our vision into a robust and user-friendly product.",
          tag: "SaaS Product",
          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AO9gCSLoDdKgboXV6NtXXgvfy1/a-professional-diverse-avatar-image-of-a-1774369786157-8e96f71c.png",
          avatarAlt: "Michael Chen avatar",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          date: "January 2024",
          title: "Exceptional technical expertise",
          quote: "Dmitry's technical expertise is top-notch. He tackled several challenging integrations with ease and provided invaluable insights that improved our project significantly.",
          tag: "API Integration",
          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AO9gCSLoDdKgboXV6NtXXgvfy1/a-professional-diverse-avatar-image-of-a-1774369787284-8a6f328d.png",
          avatarAlt: "Emily Rodriguez avatar",
        },
        {
          id: "4",
          name: "David Kim",
          date: "November 2022",
          title: "Highly recommend for any project",
          quote: "From concept to deployment, Dmitry was an indispensable part of our team. His commitment to quality and efficient workflow made all the difference. Highly recommended!",
          tag: "Full-Stack Dev",
          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AO9gCSLoDdKgboXV6NtXXgvfy1/a-professional-diverse-avatar-image-of-a-1774369786196-3771b915.png",
          avatarAlt: "David Kim avatar",
        },
        {
          id: "5",
          name: "Jessica Lee",
          date: "May 2024",
          title: "A true professional",
          quote: "Dmitry is a true professional. He’s not only skilled but also an excellent communicator, keeping us informed every step of the way. We look forward to future collaborations.",
          tag: "Product Launch",
          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AO9gCSLoDdKgboXV6NtXXgvfy1/a-professional-diverse-avatar-image-of-a-1774369785163-e973ef31.png",
          avatarAlt: "Jessica Lee avatar",
        },
      ]}
      title="What Clients Say"
      description="Hearing from satisfied clients and collaborators is incredibly rewarding. Their feedback drives my passion for delivering exceptional results and building strong professional relationships."
      tag="Client Success"
      tagIcon={Star}
      tagAnimation="opacity"
      buttonAnimation="opacity"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "What kind of projects do you take on?",
          content: "I specialize in full-stack web development, including custom web applications, SaaS platforms, e-commerce solutions, and API development. I'm always open to new and exciting challenges.",
        },
        {
          id: "2",
          title: "What's your typical development process?",
          content: "My process usually involves discovery and planning, design, agile development sprints, rigorous testing, deployment, and ongoing support. Communication is key throughout every stage.",
        },
        {
          id: "3",
          title: "How can I get a quote for my project?",
          content: "Please click the 'Get in Touch Now' button above or send me an email. Provide as much detail as possible about your project, and I'll get back to you to discuss next steps and provide an estimate.",
        },
      ]}
      ctaTitle="Let's Build Something Great Together"
      ctaDescription="Ready to bring your ideas to life? Reach out and let's discuss how I can help you achieve your development goals and create something truly impactful."
      ctaButton={{
        text: "Get in Touch Now",
        href: "mailto:dmitry.kudin@example.com",
      }}
      ctaIcon={Mail}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Dmitry Kudin"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
