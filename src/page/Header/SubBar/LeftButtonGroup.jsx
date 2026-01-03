import Button from "@/components/Button";
import ExchangeComponent from "../SubComponent/ExchangeComponent";

const LeftButtonGroup = () => {
    return (
      <div className="flex justify-between pt-0.5">
         {/* Button Group: Project, Amount and Recent */}
        <div className="flex justify-between items-center max-sm:hidden">
            <Button content="Proejct" />
            <div className="flex ml-2">
                <Button content="Amount" clickState={true} border="rounded-tl-md rounded-bl-md border-r-0"/>
                <Button content="Recent" btnEnabled={true} border="rounded-tr-md rounded-br-md" />
            </div>
        </div>

        {/* Unit */}
        <ExchangeComponent />
        
      </div>
    );
  };
  
  export default LeftButtonGroup;