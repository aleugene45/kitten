Installation and Launch:
1) Open terminal for ./kitten project folder
2) Install npm packages -> 'npm i'
3) Run local react-native cli -> 'npm run start'
4) Run android (on second terminal tab) -> 'react-native run-android' of run ios by 'react-native run-ios' 

DESCRIPTION:
App has two screens: KittenList and KittenView.

KittenList screen contains list of random kittens cards with ability to open detail page for each one.

KittenView - detail page for kitten, contain its image, name and description (loren text)

At first launch (and next list update) app saving data in AsyncStorage of last kittens list and user can looks on last list of kittens with out internet connection (Offline mode)

User can choose how many kittens should displayd on KittenList screen. (30/50/100) Or by set custom count.
