from app import app, db
from app.models import students, courses, units
from flask import render_template, request, redirect, session, flash, url_for, redirect, flash, request
from datetime import datetime

class UserControl():
    # Read the questions and options text files and send it over for processing
    # as an array 
    def quiz():
        file1 = open('questions.txt', 'r')
        file2 = open('options.txt', 'r')
        lines1 = file1.readlines()
        lines2 = file2.readlines()

        all_questions = []
        quiz = []

        for line in lines1:
            if line != "\n":
                column = line.split("/")
                temp = {}
                temp["question"] = column[1]
            
                alphabet = ord("a"[0])
                column = lines2[int(column[0])-1].split("/")
                temp2 = {}
                for i in range(1, len(column)-1):
                    temp2[chr(alphabet)] = column[i]
                    alphabet += 1
                temp["answers"] = temp2
                temp["correctAnswer"]= column[len(column)-1].replace("\n", "")
                all_questions.append(temp)
        return quiz

    # Upload the user's quiz mark into the database when they submit a quiz
    def mark(data):     
        grade = int(data['mark'])
        userid = int(data['user_id'])
        time = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
        quizNo = 0
        
        query = userStats.query.filter_by(user_id = userid).all()
        if len(query) == 0:
            quizNo = 1
        else:
            quizNo = query[-1].quiz_id + 1 

        q = userStats(user_id=userid, quiz_id=quizNo, mark=grade, time_completed=time)
        db.session.add(q)
        db.session.commit()
        return
    
    # Returns all quiz marks of a user to be processed when they direct to the stats page
    def stats(data):
        userid = int(data['user_id'])
        
        user_stats = []
        quizesTaken = userStats.query.filter_by(user_id = userid).all()

        if len(quizesTaken) == 0:
            user_stats.append(0)
            user_stats.append('-')
            return user_stats
        else:
            user_stats.append(int(quizesTaken[-1].quiz_id))

        query = userStats.query.filter_by(user_id = userid).all()
        total = 0
        frequency = [0,0,0,0,0,0]
        for i in query:
            total += i.mark
            frequency[i.mark] += 1
        avgMark = total/user_stats[0]
        user_stats.append(avgMark)
        user_stats = user_stats + frequency
        return user_stats