import AndroidImage from "../img/course/android.png";
import JetpackImage from "../img/course/jetpack.png";
import FirebaseImage from "../img/course/firebase.png";
import TensorflowImage from "../img/course/tensorflow.png";

import ProgressBar100 from "../img/course/progress-bar-100.png";
import ProgressBar66 from "../img/course/progress-bar-66.png";
import ProgressBar11 from "../img/course/progress-bar-11.png";

export const technology = {
    title: "Technology",
    desc: "I am fluent in Kotlin and Java, have significant knowledge of JavaScript and often " +
        "use other languages such as Python or C++. Moreover, I have experience with modern Android Developer tools " +
        "and Firebase, which I have been applying to my project since September, 2021. " +
        "Lately, I have also started exploring machine learning with TensorFlow and " +
        "I am planing to dive deeper into this area in the following months.",
    coursesTitle: "Courses",
    courses: 
    [
        {
            id: 1,
            title: "Android Java Masterclass",
            subtitle: "Become an App Developer",
            status: "Completed",
            percentage: "100%",
            progress: ProgressBar100,
            link: "https://www.udemy.com/course/master-android-7-nougat-java-app-development-step-by-step/",
            img: AndroidImage
        },
        {
            id: 2,
            title: "Android Jetpack Masterclass in Java",
            subtitle: "",
            status: "Completed",
            percentage: "100%",
            progress: ProgressBar100,
            link: "https://www.udemy.com/course/androidjetpackjava/",
            img: JetpackImage
        },
        {
            id: 3,
            title: "Android Firebase Masterclass",
            subtitle: "Master Google Firebase",
            status: "In Progress",
            percentage: "67%",
            progress: ProgressBar66,
            link: "https://www.udemy.com/course/android-firebase-masterclass/",
            img: FirebaseImage
        },
        {
            id: 4,
            title: "TensorFlow Developer Certificate in 2022",
            subtitle: "Zero to Mastery",
            status: "In Progress",
            percentage: "11%",
            progress: ProgressBar11,
            link: "https://www.udemy.com/course/tensorflow-developer-certificate-machine-learning-zero-to-mastery/",
            img: TensorflowImage
        }
    ]
}