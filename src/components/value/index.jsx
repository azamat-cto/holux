import { useSectionInView } from '@/hooks'
import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

import ValueImage from '@/assets/images/value.jpg'

function Value() {
  const { ref } = useSectionInView('value', 0.70)

  return (
    <motion.section
      className="pt-[4.5rem] pb-8"
      id="value"
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="container">
        <div className="grid gap-y-12">
          <div className="relative flex justify-center">
            <div className="w-[266px] h-[316px] bg-[hsl(228,24%,97%)] rounded-[135px_135px_16px_16px]"></div>
            <div className="absolute w-[250px] h-[300px] overflow-hidden rounded-[125px_125px_12px_12px] inset-0 m-auto shadow-[0_16px_32px_hsla(228,66%,25%,0.25)]">
              <img src={ValueImage} alt="" />
            </div>
          </div>

          <div className="">
            <div className="mb-8">
              <p className="text-sm text-secondary">Our Values</p>
              <h2 className="text-xl mb-4">
                Value We Give To You<span className="text-secondary">.</span>
              </h2>
              <p className="text-sm">
                We always ready to help by providing the best service for you.
                We believe a good place to live can make your life better.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Best interest rates on the market
                </AccordionTrigger>
                <AccordionContent>
                  Price we provides is the best for you, we guarantee no price
                  changes on your property due to various unexpected costs that
                  may come.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Prevent unstable prices</AccordionTrigger>
                <AccordionContent>
                  Price we provides is the best for you, we guarantee no price
                  changes on your property due to various unexpected costs that
                  may come.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Best prices on the market</AccordionTrigger>
                <AccordionContent>
                  Price we provides is the best for you, we guarantee no price
                  changes on your property due to various unexpected costs that
                  may come.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Security of your data</AccordionTrigger>
                <AccordionContent>
                  Price we provides is the best for you, we guarantee no price
                  changes on your property due to various unexpected costs that
                  may come.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Value
