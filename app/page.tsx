import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Sparkles, Shield, Zap, ImageIcon, Type, Video, Download } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/images/image.png" 
              alt="Aicser Logo" 
              className="h-10 w-10"
            />
            <span className="text-xl font-bold">Aicser Digital Tools</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#tools" className="text-sm font-medium hover:text-primary transition-colors">
              Tools
            </Link>
            <Link href="/auth/login" className="text-sm font-medium hover:text-primary transition-colors">
              Sign In
            </Link>
            <Button asChild>
              <Link href="/auth/sign-up">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            AI-Powered Digital Tools
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            All Your Digital Tools in <span className="text-primary">One Place</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Access powerful AI-driven tools for image processing, text formatting, video editing, and more. 
            Streamline your workflow with our comprehensive suite of digital utilities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="gap-2">
              <Link href="/auth/sign-up">
                Start for Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#tools">Explore Tools</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Aicser?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Built with cutting-edge AI technology to make your digital tasks effortless
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Process your files in seconds with our optimized AI algorithms
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p className="text-muted-foreground">
              Your data is encrypted and never stored longer than necessary
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
            <p className="text-muted-foreground">
              Leverage the latest AI models for superior results
            </p>
          </Card>
        </div>
      </section>

      {/* Tools Preview Section */}
      <section id="tools" className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Tools at Your Fingertips</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From image processing to video editing, we've got you covered
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[
            { icon: ImageIcon, title: 'Image Tools', description: 'Resize, compress, convert formats', color: 'primary' },
            { icon: Type, title: 'Text Tools', description: 'Format, analyze, transform text', color: 'secondary' },
            { icon: Video, title: 'Video Tools', description: 'Edit, compress, convert videos', color: 'primary' },
            { icon: Download, title: 'File Tools', description: 'Merge, split, convert files', color: 'secondary' },
          ].map((tool, i) => (
            <Card key={i} className="p-6 hover:border-primary/50 transition-colors cursor-pointer">
              <tool.icon className={`h-8 w-8 mb-3 ${tool.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
              <h3 className="font-semibold mb-1">{tool.title}</h3>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button size="lg" asChild>
            <Link href="/auth/sign-up">
              Sign Up to Access Tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Ready to Supercharge Your Workflow?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Join thousands of users who trust Aicser Digital Tools for their daily tasks
          </p>
          <Button size="lg" asChild className="gap-2">
            <Link href="/auth/sign-up">
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/image.png" 
                alt="Aicser Logo" 
                className="h-8 w-8"
              />
              <span className="font-semibold">Aicser Digital Tools</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Aicser. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
