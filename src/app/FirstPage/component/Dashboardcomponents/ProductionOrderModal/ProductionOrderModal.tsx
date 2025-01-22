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