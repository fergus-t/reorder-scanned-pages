# reorder-scanned-pages

This short script for adobe acrobat pro reorders double-sided document scanned with a simplex ADF (auto document feeder) scanner. 



# How to use:
1. Scan all odd number pages
2. Scan all even number pages (directly flip over the whole stack of paper from the scanner's ADF output tray, NOT flipping page by page, and put it back into the input tray)
3. Ensure that the PDF document is in the order of: Odd number pages (ascending), even number pages (descending)
4. Run the script. 

# How to install the script in Adobe Acrobat Pro
1. Go to "More Tools" on the bar on toolbar on the right
2. Find "Action Wizard", under the category "Customize"
3. Click "Open" under "Action Wizard"
4. A bar should now appear on the top. Choose "New Custom Command"
5. On the popup window titled "New Custom Command", select "Execute Javascript" under "Customizable Commands"
6. Name the tool and tool tip in the textboxes on the right, and click "OK"
7. Paste the script 
8. A new window "Javascript Editor" should pop up. Paste script in the textarea/textbox, and click ok. 

# How to run:
1. Go to "Action Wizard"
2. There should be a newly created function under "CUSTOM COMMANDS" on the right.


# Example of scanned PDF page order for 5 pages of double-sided document (10 sides):
1, 3, 5, 7, 9, 10, 8, 6, 4, 2


Enjoy!
