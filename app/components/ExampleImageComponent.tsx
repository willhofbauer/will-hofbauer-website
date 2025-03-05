import Image from "next/image"

const ExampleImageComponent = () => {
  return (
    <div>
      <Image src="/path-to-your-image.jpg" alt="Description of the image" width={500} height={300} />
    </div>
  )
}

export default ExampleImageComponent

