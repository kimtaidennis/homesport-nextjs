import {
    data, 
    sport
} from "@/models/data";

export const getMenu = async () =>  {
    try {
        const res = await new Promise((resolve, reject) => {
            if(data.menu.length > 0) {
                resolve(data.menu);
            } else {
                reject('Error');
            }
        });
        return res;
    } catch (error) {
        return []
    }
}

export const getSport = async (spid) =>  {
    try {
        const res = await new Promise((resolve, reject) => {
            if(sport[spid].length > 0) {
                resolve(sport[spid]);
            } else {
                reject('Error');
            }
            
        });

        return res;
        
    } catch (error) {
        return [];
    }
}

export const getJackpot = async () =>  {
    try {
        const res = await new Promise((resolve, reject) => {
            if(sport['jackpot'].length > 0) {
                resolve(sport['jackpot']);
            } else {
                reject('Error');
            }
            
        });

        return res;
        
    } catch (error) {
        return [];
    }
}
