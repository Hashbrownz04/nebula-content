#!/bin/bash

# Module 1: Introduction to Software Engineering
mkdir "Module-1-Introduction-to-Software-Engineering"
cd "Module-1-Introduction-to-Software-Engineering"

# Lessons for Module 1
declare -a lessonsModule1=("Lesson-1-Setup-Dev" "Lesson-2-Git&Github" "Lesson-3-JavaScript-Basics" "Lesson-4-HTML-CSS-Basics" "Lesson-5-DOM-Manipulation")
for lesson in "${lessonsModule1[@]}"
do
    mkdir "$lesson"
    cd "$lesson"
    mkdir notes assignments practice
    cd ..
done
cd ..