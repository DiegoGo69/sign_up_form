# sign_up_form
Sign-up Form project as part of The Odin Project curriculum. A form for an imaginary contest for a trip to the Formula One Las Vegas Grand Prix. Watch it [live](https://diegogo69.github.io/sign_up_form/).

## Goal
The past couple of days I've been learning a lot of new concepts and techniques on more advance HTML and CSS. I want to be able to put all of those concepts and conventions together implementing them effectively and in a sensible way for this project. CSS positioning, default styles, relative units, fallback, custom properties and advance selectors, as well as following appropiate conventions on form styling and client-side validation

## How it works
In order to implement all of the new concepts and tools I wanted to play with I've created more of a landing page for the respective form than just a page with the form alone. Trying to make it look structured, visually attractive and user friendly from the client-side validation, althought the latter was not a requirement I didn't miss the change to play with some JavaScript

### Structure
The page is structured in the following sections: header, hero, form, disclaimer and footer.

#### Header
A simple and llamative sticky header, wich is always displayed in the viewport even when scrolling

#### Hero Section
The goal is to generate a great first impression. It includes a local page link that position the user right in the form section

#### Form section
The main part of the web page. For this form I wanted to play with the most form controls I can, while trying to not overload the form. The form contains input elements of type text for the *name*, number for *age*, email for *email address*, tel for *mobile phone number*, password for both *password* and *confirm*, then we have a select element to choose the prefered team and two radio inputs, one for each of the team's drivers, the radio input label for the driver's name are set using JavaScript. Then a textarea element is presented so the user can elaborate on their passion for Formula One, followed by an input of type file, that accept image files, for the user to share photos watching the sport. Finally a checkbox to accept terms and conditions.

#### Disclaimer section
A section to inform more visusally clear that it is an imaginary contest, and incorporate links to the official web pages for both Formula One and The Las Vegas Gran Prix.

#### Footer
Show personal contact information, incorporating svg logos.

### Styling
For me Formula One is the most visually attractive sport for media and creative content creation. I wanted to incorporate that style playing with the tools I currenntly have in my toolkit, and the newer ones I learnt. I went for a dark theme to match the night-life nature of Las Vegas Grand Prix.

#### Colors
Red, black and white conform the color palette. This was the perfect implementation for custom properties, declaring CSS variables for the main recurrent colors in the page.

#### Backgrounds
The `background` shorthand property gave me more of a headache in the lectures, since it is SO extensive and can get very complex. Linear-gradients and Image backgrounds were implemented, as well as fallback background colors.

#### Relative and Absolute units
**Px**'s left the chat for this one, almost. For absolute units I used **rem** for the most, and px ocassionally for very small values. This decision is based on make the page respect the user preferences on font settings, as well as being more general and semantic for text related units. About relative units, I implemented **viewport relative** units for declaring Sections and main/outer containers sizes, that I wanted to have a size relative to the viewport, and **percentages** were to declare inner container items, and it seems like **3%** padding is almost always a good choice. 

#### CSS Functions
Reading about function values I though this was a great chance to make the page elements more dynamic, not fully responsive though, but to respond to viewport size changes, growing or shrinking respectively. Apart from `rgb()` and `hsl()`, `min()` and `clamp()` were widely implemented for size declarations, setting a size boudaries, both on fonts and container elements.

#### Positioning
Sticky postioning were use for the header, and relative and absolute positioning were used in form elements, to add styling details using the `content` property and `::before` and `::after` pseudo elements.

#### Pseudo-elements and Pseudo-classes
I tried to implement `::before` and `::after` and get the trick on their use cases. And `:user-valid` and `:user-invalid` are really useful for a more user-friendly interface.

#### Advance selectors
It's amazing how advance selectors avoid vaing to overload the html with classes and id's. I allowed me to be more semantic and specific for styling elements. Although I think I have to improve their semantics and specificity on declarations.

#### Default styles
**Modern normalize** were incorporated in the project, to ensure consistency accross browsers, without getting rid of the visual side effect that do not suffer inconcistencies.

### Client-side validation
The moment I read about *eager validation* I just thought It was the right approach, and it was such a good chance to play with some JavaScript. Lazy validation is used at start, not overwhelming the user with invalid alerts as a welcome. It waits for the user to enter values in the respective field and after the focus in changed to another input field, it shows if it's valid or not. For password and emails an agressive approach is used once the user has changed the value, validating on input while the user is typing, showing if there is still and error or the input is now valid. The password confirm validates as well when the password is changed, so if the password that previosly matched was changed the confirmation field show that the confirmation no longer match. As an opinionated feature lando norris is not eligible as fav driver.