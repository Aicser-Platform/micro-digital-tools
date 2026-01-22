import { redirect } from 'next/navigation'
import { createServerClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { LogOut, ImageIcon, Type, Video, FileText, Sparkles } from 'lucide-react'

interface Tool {
  id: string
  name: string
  description: string
  category_id: string
  icon: string
  is_active: boolean
}

interface Category {
  id: string
  name: string
  description: string
  icon: string
}

export default async function DashboardPage() {
  const supabase = await createServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  // Fetch categories and tools
  const { data: categories } = await supabase
    .from('tools_categories')
    .select('*')
    .order('name')

  const { data: tools } = await supabase
    .from('tools')
    .select('*')
    .eq('is_active', true)
    .order('name')

  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, any> = {
      image: ImageIcon,
      type: Type,
      video: Video,
      file: FileText,
      sparkles: Sparkles,
    }
    return iconMap[iconName.toLowerCase()] || Sparkles
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/images/image.png" 
              alt="Aicser Logo" 
              className="h-10 w-10"
            />
            <span className="text-xl font-bold">Aicser Digital Tools</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:inline">
              {user.email}
            </span>
            <form action="/auth/signout" method="post">
              <Button variant="outline" size="sm" type="submit">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back!</h1>
          <p className="text-lg text-muted-foreground">
            Choose from our collection of AI-powered digital tools
          </p>
        </div>

        {/* Tools Grid by Category */}
        <div className="space-y-12">
          {categories?.map((category) => {
            const categoryTools = tools?.filter((tool) => tool.category_id === category.id)
            
            if (!categoryTools || categoryTools.length === 0) return null

            const CategoryIcon = getIconComponent(category.icon)

            return (
              <div key={category.id}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CategoryIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {categoryTools.map((tool) => {
                    const ToolIcon = getIconComponent(tool.icon)
                    
                    return (
                      <Card 
                        key={tool.id} 
                        className="hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer group"
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <ToolIcon className="h-6 w-6 text-primary" />
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              AI
                            </Badge>
                          </div>
                          <CardTitle className="text-lg">{tool.name}</CardTitle>
                          <CardDescription className="text-sm">
                            {tool.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button className="w-full bg-transparent" size="sm" variant="outline">
                            Open Tool
                          </Button>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State */}
        {(!tools || tools.length === 0) && (
          <Card className="p-12 text-center">
            <Sparkles className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">No tools available yet</h3>
            <p className="text-muted-foreground mb-6">
              We're working on adding more tools to help you with your digital tasks.
            </p>
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </Card>
        )}
      </main>
    </div>
  )
}
