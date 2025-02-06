import { gridItems } from "../data"
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"

const Grid = () => {
    return (
        <div id="about">
            <BentoGrid className="">
                {gridItems.map((item) => (
                    <BentoGridItem
                        className={item.className}
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