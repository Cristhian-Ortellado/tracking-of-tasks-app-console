import { v4 as uudiv4 } from 'uuid';
class Task {
    id = '';
    description = '';
    completed_at = null;

    constructor(description){
        this.id = uudiv4();
        this.description = description;
        this.completed_at = null;
    }
}

export{Task};