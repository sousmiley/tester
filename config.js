const config = {
    API_KEY: 'sk-KwtH67440f9a0719c7757',
    PLANT_OF_DAY_ID: (() => {
        // Get current date in YYYYMMDD format
        const today = new Date();
        const dateString = today.getFullYear().toString() + 
                          (today.getMonth() + 1).toString().padStart(2, '0') + 
                          today.getDate().toString().padStart(2, '0');
        
        // Convert date string to a number and use it as a seed
        let seed = parseInt(dateString);
        
        // Use a larger multiplier to get better distribution
        seed = seed * 1234567;
        
        // Use modulo to get a number between 0 and 10101, then add 1
        const randomNum = (seed % 10102) + 1;
        
        return randomNum;
    })(),
    FREE_PLANT_IDS: [
        1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        // Add more verified free plant IDs here
    ],
    get PLANT_OF_DAY_ID() {
        // Use the current date as seed to ensure same plant shows for everyone on the same day
        const today = new Date().toISOString().split('T')[0];
        const seed = today.split('-').reduce((a, b) => a + parseInt(b), 0);
        
        // Use the seed to get a consistent random index for the day
        const index = seed % this.FREE_PLANT_IDS.length;
        return this.FREE_PLANT_IDS[index];
    }
};
