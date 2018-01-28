class sendToAll {
    constructor() {
            new Promise((resolve, reject) => {
            // Add jQuery to Page
                // - Check if jQuery is already loaded
                if(window.jQuery){
                  resolve()
                }
                const $jquery = document.createElement('script');
                $jquery.onload = resolve;
                $jquery.src = `https://code.jquery.com/jquery-2.2.4.js`;
                document.head.appendChild($jquery);
            }).then(() => {
                // Creating An Array of Students
                const cssClass = 'student-row--flex-row--rD3Y-';
                this.studentArray = $(`.${cssClass}`).toArray();
                this.last = this.studentArray.length -1;
                // First Time mainHandler should be called manually
                this.mainHandler();
            })
        }
        /* Utils */
    getFirstName(name) {
        return name.split(" ")[0];
    }
    createTemplate(name) {
        return `
        >**WEEKLY CHECK IN**

        Hey ${name}! How are you doing and how's the learning going?

        What are your goals for the coming week?

        Are you currently stuck on anything? If so, what are you facing?
    `;
    }
    chatOpened(name) {
        return $('.index--wrapper--2Hiva').length !== 0
    }
    mainHandler() {
        if (this.studentArray.length === 0) {
            return;
        }
        // Selecting the last element of Array

        const student = this.studentArray[this.last];
        // Get Name of Student
        const name = $(student).text();
        const firstName = this.getFirstName(name);
        // Open Student Chat
        new Promise((resolve, reject) => {
            $(student).click();
            const loop = () => {
                if (this.chatOpened(name)) {
                    return resolve();
                }
                setTimeout(loop, 100);
            }
            loop();
        }).then(() => {
            // Adding Text to Input Field
            const text = this.createTemplate(firstName);
            // Select the Input Field
            const textarea = $('.send-input--form--25WLV textarea') // Need to find a way to emulate the enter press.
                // On ENTER the response would be sent as well as mainHandler should be called again.
            textarea.keyup((e) => {
                if (e.which == 13) {
                    this.mainHandler();
                }
            });
            textarea.val(text)
        })
    }
}
