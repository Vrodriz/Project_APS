import React from 'react';


//criando interface pro modal
interface ProductionOrderModalProps {   
    isOpen: boolean;
    onClose: () => void;
    onSaved: (order: {  
        machine: string;
        product: string;
        shifts: number;
        startDate: string;
        endDate: string;
}) => void;
}

const ProductionOrderModalProps: React.FC<ProductionOrderModalProps> = ({
    isOpen,
    onClose,
    onSave,
}) => { 

    const [machine, setMachine] = React.useState('');
    const [product, setProduct] = React.useState('');
    const [shifts, setShifts] = React.useState(1);
    const [startDate, setStartDate] = React.useState('');   
    const [endDate, setEndDate] = React.useState('');

    const handleSave = () => {  
        
    }

}