import Accordion from "@/components/Accordion";
import Token from "@/components/Token";

const SimilarTokenComponent = () => {
    return (
        <Accordion>
            {/* <FullHeightScrollable offset={743}> */}
            <div className="overflow-y-scroll h-50">
                <div className="flex flex-col gap-2">
                    <Token Premium={true} />
                    <Token />
                    <Token />
                    <Token />
                    <Token />
                    <Token />
                    <Token />
                </div>
            </div>
                
            {/* </FullHeightScrollable> */}
        </Accordion>
    );
  };
  
  export default SimilarTokenComponent;