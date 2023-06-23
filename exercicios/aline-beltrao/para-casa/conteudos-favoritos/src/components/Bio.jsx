import Title from "./Title"
import Text from "./Text"
import Image from "./Image"

import aline from '../assets/foto-aline.jpeg'

function Bio(){
    return (
        <div className="card">
            <Title text="Oim, eu sou Aline Beltrão" />
            <Text text="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est.Detraxit consequat et quo num tendi nada.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl." />
            <Image img={aline} description="fto de Aline" />
        </div>
    )
}

export default Bio