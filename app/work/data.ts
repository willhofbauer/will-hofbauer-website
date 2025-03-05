import fs from 'fs'
import path from 'path'

// Define interfaces for our data
export interface Release {
    title: string
    year: number
    label: string
    url: string
    artworkUrl: string
}

export interface Label {
    name: string
    url: string
    soundcloudUrl: string
}

// Function to get all releases from the content directory
export function getReleases(): Release[] {
    const contentDir = path.join(process.cwd(), 'app/work/content/releases')
    const fileNames = fs.readdirSync(contentDir)

    // Read each file and parse its JSON content
    const releases = fileNames.map(fileName => {
        const filePath = path.join(contentDir, fileName)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        return JSON.parse(fileContent) as Release
    })

    // Sort by year (descending) and then by filename (which includes the original order)
    return releases.sort((a, b) => b.year - a.year)
}

// Function to get all labels from the content directory
export function getLabels(): Label[] {
    const contentDir = path.join(process.cwd(), 'app/work/content/labels')
    const fileNames = fs.readdirSync(contentDir)

    // Read each file and parse its JSON content
    const labels = fileNames.map(fileName => {
        const filePath = path.join(contentDir, fileName)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        return JSON.parse(fileContent) as Label
    })

    return labels
} 