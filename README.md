# **What is Machine Learning ?**
Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. Machine learning focuses on the development of computer programs that can access data and use it to learn for themselves.
## How do we define it in terms everyone can understand?
Machine learning is a computer program/an algorithm when fed with a lot of data in form of numbers finds patterns and similarity in those data and make predictions for that data.
### Supervised Learning
This machine leaning alorithms is nothing but a self learning algorithm with makes use of the data in forms of these numbers and preform several computation(Operations) and learns through its mistakes(Discussed later), This is called a supervised learning where the alogithm knows its mistakes/how wrong its from the orginal values

## You would get a question how can it find patterns ?
For that first lets define what's data and how the data is structured
### Data 🤔
Data is numbers or text or anything which gives some meaning or in other terms which has some structure and tells us about something
* Data Can be in any format

### Now that we know whats Data lets see Data in Machine Learning

The building block of Machine learning is Maths, We all know that, But what kind of math?🤔

## Y = mX + c

Does this Look familiar?

Yes Its that same equation of line we studied in class 11 and 12 which comes under the part of linear alegbra

## Y = aX^2 + bX + c ?

Yes this is a equation of degree 2, This is the fundamentals of machine learning

### Now lets think can we use text or audio in equation?

The answer is technically no (There's a way😯 to convert it into digits), So if we are given x = 10 and y = 26 and the equation y = aX^2 + bX + c can we find out values of a b c where x and y are true

YES! Thats machine Learning for you, We make patterns/Relations between the given input which is x and output which is y, but adjusting values of a b c, but solving it we get a = ? waittt! we cant do with, we only know to get x when a b c are given but its possible but solving the equations and finding a b c

## aX^5 + bX^4 + cX^3 + dX^2 + cX + e 

For This😥 doesn't it look very hard to find a b c so on... Theres a more suitable way to do this and its called GRADIENT DESCENT!😯

## And here comes the math intensive part!😉😎

### Gradient Descent

What's a gradient?

It Gives us the change in y when there's a change in x. 

Let Y be the loss (difference between the orginal value and found value)

We need to minimize lhe loss

this gradient shows us if we change the Equation value of A by the gradient the value of a becomes closer to the required value of a, And this done n number of time we reach close and closer to the required value and same does also for the other valriables.

Thus finding the values of a b c where the loss which is Y is the minimum

A small tip WE ARE FINDING THE LOCAL MINIMA FOR THE GIVEN EQUATION!

https://www.khanacademy.org/math/multivariable-calculus/applications-of-multivariable-derivatives/optimizing-multivariable-functions/a/what-is-gradient-descent this beautiful aritcle gives us a great explaination of gradient descent (Linear algebra and calculus knowledge upto partial derivative of multivariable calculus required)

## *Now Lets put everything together. So basic Machine Learning is when a data containing a input X and ouput Y we find the relation/patterns between them by using linear equations(not all cases) and optimizing them (minimizing the loss) between the generated y and given y using gradient descent thus more the degree of the equation less the loss and more the variables to fine tune the equation to get Y as the output to make loss near 0.*

Now that we have a basic idea of what machine learning is let us see machine learning in action.

(The algorithm and field used here is Deep learning and Convolutional neural networks but the basic concepts of equations and gradient descent is the same but a little more concept intensive but that doesnt mean u cant enjoy this results)

# Importing The Data

*   This Notebook is Trained using the ASL Dataset from Kaggle
*   https://www.kaggle.com/grassknoted/asl-alphabet
*   Each Class Contains 3000 Photos of each Alphabet

![image](https://user-images.githubusercontent.com/91791834/176954355-9cc440a2-cacf-48b3-be34-9eee3db30b7d.png)

![Output#](https://user-images.githubusercontent.com/91791834/176954542-2427de5f-643d-4d99-adab-d7025ca32bec.png)
