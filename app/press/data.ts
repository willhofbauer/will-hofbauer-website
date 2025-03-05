import fs from 'fs'
import path from 'path'

export interface PressItem {
    year: number
    title: string
    url: string
}

// Function to get all press items from the content directory
export function getPressItems(): PressItem[] {
    const contentDir = path.join(process.cwd(), 'app/press/content')
    const fileNames = fs.readdirSync(contentDir)

    // Read each file and parse its JSON content
    const pressItems = fileNames.map(fileName => {
        const filePath = path.join(contentDir, fileName)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        return JSON.parse(fileContent) as PressItem
    })

    // Sort by year (descending) and then by filename (which includes the original order)
    return pressItems.sort((a, b) => b.year - a.year)
} 