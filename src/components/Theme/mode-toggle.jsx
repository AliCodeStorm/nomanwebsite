"use client"

import { Moon, Sun, Laptop } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "./theme-provider"

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                    <Sun className="h-[1.2rem] w-[1.2rem] transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="z-50 w-36 rounded-md shadow-md border bg-white dark:bg-gray-800">
                <DropdownMenuItem
                    onClick={() => setTheme("light")}
                    className="flex items-center gap-2 px-2 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                    <Sun className="w-4 h-4" />
                    Light
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={() => setTheme("dark")}
                    className="flex items-center gap-2 px-2 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                    <Moon className="w-4 h-4" />
                    Dark
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={() => setTheme("system")}
                    className="flex items-center gap-2 px-2 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                    <Laptop className="w-4 h-4" />
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
