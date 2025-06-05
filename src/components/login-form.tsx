import { useState } from "react"
import { GalleryVerticalEnd } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { loginToSBid } from "@/lib/api" // Este es un wrapper


export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [dni, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("Conectando...")
  
    try {
      const success = await loginToSBid(dni, password)
      setMessage(success ? "✅ Login correcto" : "❌ Usuario o contraseña incorrectos")
    } catch (err) {
      setMessage("❌ Error de conexión")
      console.error(err)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          {/* cabecera visual */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-6" />
            </div>
            <h1 className="text-xl font-bold">QBID CONTROL</h1>
          </div>

          {/* campos */}
          <div className="grid gap-2">
            <Label htmlFor="dni">dni</Label>
            <Input
              id="dni"
              type="text"
              placeholder="XXXXXXXXX"
              value={dni}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Conectar
          </Button>

          {/* feedback */}
          {message && (
            <p className="text-sm text-center text-muted-foreground">{message}</p>
          )}
        </div>
      </form>
    </div>
  )
}
