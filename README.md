# HawaiiAlert
An app to improve on Hawaii's disaster alert systems

To install
1. [Install Meteor](https://www.meteor.com/install).
1. Download, or fork and clone, the repository to your computer.
1. Open a terminal and `cd` to the `app/` directory.
1. Open `app/private/initial-contact-collection.json` and replace the sample data with any email accounts or phone numbers you would like to use the system with.
1. Run `meteor npm install`.
1. Run `meteor run`.
1. The app will be running at [localhost:3000](http://localhost:3000).

The default admin account is \[username: testing, password: password\].  
The default user account is \[username: user, password: password\].  
In order to send an alert, you will need approval from an admin account which cannot be the account you are currently using.  To send an alert, either sign in with 'user' and verify with 'testing', or use 'testing' to create a new admin account.  
It is possible to remove all admin accounts, in this case, the app must be reset.

If you make any changes to the files `app/private/initial-contact-collection.json` or `app/private/initial-collection-data.json` and would like to see these changes reflected in the app, the app must be reset.

To reset:
1. Open a terminal and `cd` to the `app/` directory.
1. Run `meteor reset`.
1. The next time you run `meteor run`, the app shall reflect the default settings.
