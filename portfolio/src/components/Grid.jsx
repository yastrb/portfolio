import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"

const Grid = () => {
    return (
        <div id="about">
            <BentoGrid>
                {[{ title: "About", description: "Learn more about me", id:"1" },].map((item) => (
                    <BentoGridItem
                        id={item.id}
                        key={item.id} 
                        title={item.title} 
                        description={item.description} 
                        icon={item.icon} />
                        ))}
            </BentoGrid>
        </div>
    )
}

export default Grid