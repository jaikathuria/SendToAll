# **sendToAll()**
## A utility script for sending a broadcast message to a selected group of mentees.
*Note: This script still can't send messages automatically, though do most of the work for you. To send a message you just need to press **ENTER** *

[![DUB](https://img.shields.io/dub/l/vibe-d.svg?style=for-the-badge)]()
## Requirements

Just a web browser!

## How to use
 * Open Mentorship Dashboard, and let the page load completely.

 * Bookmark all the students to whom you **don't** want to send the message.
 * Open browser JS console. *(To open console on Google Chrome -  On Windows and Linux: Ctrl + Shift + J, On Mac: Cmd + Option + J)*

 *  Copy the whole of the script in `index.js`.

 *  Paste the script in browser console.

 *  Make sure you edit the `createTemplate` method with the template of the message you want to send. You just need to edit the content inside the back ticks.

    * If you want to use the first name of the student somewhere inside the template, just use `${name}` at that place.

    * Example:
    Say you want to wish all of your students on the New Year, then createTemplate method would look something like

    ```
  createTemplate(name) {
    return `
  Hey ${name}
  Hope you are enjoying the holiday season!
  New Year is the time to set new goals, make new resolutions and working hard to achieve them… make this upcoming year a new beginning for all your pending tasks, to complete them with more energy and zeal… Wishing you a focused and dedicated Happy New Year.
    `;
  }
      ```      

* Once you have pasted the code, you need to run the following command:

  ```
  new sendToAll()
  ```
* The last mentee in your mentee list will automatically get selected, and your template message will appear in the text-box.

* Press **ENTER** to send the message. (You might wish to change the text in the text-area for some particular mentee and you are free to do that, just change the text and then press ENTER)

* Once the message is sent, next mentee in the list will automatically gets selected, with template message in the text-box. So now you just need to press **ENTER** again and again.

## Contributing

This script is not yet complete, and requires a lot of work. If you got a question or an idea? Found a bug? Check out our [contribution guidelines]() for ways to offer feedback and contribute.

For minor changes:
 1. Fork this [Repo](https://github.com/jaikathuria/SendToAll#fork-destination-box).

 2. Create a new branch:
 ```
 git checkout -b new-branch
 ```

 3. Make the changes.

 4. Commit your work:
 ```
 git commit -m "work: informative message"
 ```

 5. Push changes to your forked Repo:
 ```
 git push origin new-branch
 ```

 6. Create a pull request. ( Please provide a detailed description about what you are proposing and why )


## License

[MIT](LICENSE) © Jai Kathuria.
