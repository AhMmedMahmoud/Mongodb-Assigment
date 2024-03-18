const queries =
    [
        // Q1
        {
            query:
                db.students.find({}).sort({ "personal_info.birthdate": 1 }).limit(10)
        },
        // Q2
        {
            query:
                db.students.find({ "personal_info.full_name": "Ahmed" })
        },
        // Q3 
        {
            query:
                db.students.find({
                    $expr: {
                        $eq: [{ $year: "$personal_info.birthdate" }, 2001]
                    }
                })
        },
        // Q4 
        {
            query:
                db.students.find({
                    $expr: {
                        $and:
                            [
                                {
                                    $lte:
                                        [
                                            {
                                                $subtract: [
                                                    { $year: new Date() },
                                                    { $year: "$personal_info.birthdate" }
                                                ]
                                            },
                                            20
                                        ]
                                },
                                {
                                    $gte:
                                        [
                                            {
                                                $subtract:
                                                    [
                                                        { $year: new Date() },
                                                        { $year: "$personal_info.birthdate" }
                                                    ]
                                            },
                                            15
                                        ]
                                }
                            ]
                    }
                })
        },
        // Q5
        {
            query:
                db.students.find({
                    $expr: {
                        $eq: [{ $month: "$personal_info.birthdate" }, 7]
                    }
                })
        },
        // Q6
        {
            query:
                db.students.find({ "personal_info.address": "Giza" })
        },
        // Q7
        {
            query:
                db.students.find({ "registered_courses.code": "CSE271" })
        },
        // Q8
        {
            query:
                db.students.find({ "registered_courses.instructors.full_name": "Ahmed" })
        },
        // Q9
        {
            query:
                db.students.find({ "personal_info.father.full_name": { $regex: /^Said/ } })
        },
        // Q10
        {
            query:
                db.students.aggregate([
                    { $match: { "personal_info.code": 111 } }, // Replace 111 with the specific student code
                    { $unwind: "$historical_results" },
                    {
                        $project: {
                            _id: 0,
                            "Course Code": "$historical_results.code",
                            "Course Name": "$historical_results.name",
                            "Percentage": {
                                $divide: [
                                    "$historical_results.total",
                                    "$historical_results.max_total"
                                ]
                            },
                            "Grade": {
                                $switch: {
                                    branches: [
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.85] }, then: "Excellent" },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.75] }, then: "Very Good" },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.65] }, then: "Good" },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.50] }, then: "Passed" }
                                    ],
                                    default: "Failed"
                                }
                            }
                        }
                    }
                ])
        },
        // Q11
        {
            query:
                db.students.aggregate([
                    { $match: { "personal_info.code": 111 } }, // Replace 111 with the specific student code
                    { $unwind: "$historical_results" },
                    {
                        $project: {
                            _id: 0,
                            "Course Code": "$historical_results.code",
                            "Course Name": "$historical_results.name",
                            "GPA": {
                                $switch: {
                                    branches: [
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.97] }, then: "A" },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.93] }, then: "A-" },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.89] }, then: "B+" },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.84] }, then: "B" },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.80] }, then: "B-" },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.76] }, then: "C+" },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.73] }, then: "C" },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.70] }, then: "C-" },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.67] }, then: "D+" },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.64] }, then: "D" }
                                    ],
                                    default: "F"
                                }
                            }
                        }
                    }
                ])
        },
        // Q12
        {
            query:
                db.students.aggregate([
                    { $unwind: "$historical_results" },
                    {
                        $group: {
                            _id: "$personal_info.code",
                            "Total Marks": { $sum: "$historical_results.total" },
                            "Max Total Marks": { $sum: "$historical_results.max_total" },
                            "Grade": {
                                $max: {
                                    $switch: {
                                        branches: [
                                            { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.85] }, then: "Excellent" },
                                            { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.75] }, then: "Very Good" },
                                            { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.65] }, then: "Good" },
                                            { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.50] }, then: "Passed" }
                                        ],
                                        default: "Failed"
                                    }
                                }
                            }
                        }
                    },
                    {
                        $project: {
                            _id: 1,
                            "Total Marks": 1,
                            "Percentage": { $divide: ["$Total Marks", "$Max Total Marks"] },
                            "Grade": 1
                        }
                    }
                ])
        },
        // Q13
        {
            query:
                db.students.aggregate([
                    {
                        $unwind: "$historical_results"
                    },
                    {
                        $set: {
                            "GPAS": {
                                $switch: {
                                    branches: [
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.97] }, then: { $multiply: ["$historical_results.credit_hours", 4] } },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.93] }, then: { $multiply: ["$historical_results.credit_hours", 3.7] } },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.89] }, then: { $multiply: ["$historical_results.credit_hours", 3.3] } },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.84] }, then: { $multiply: ["$historical_results.credit_hours", 3] } },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.80] }, then: { $multiply: ["$historical_results.credit_hours", 2.7] } },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.76] }, then: { $multiply: ["$historical_results.credit_hours", 2.3] } },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.73] }, then: { $multiply: ["$historical_results.credit_hours", 2] } },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.70] }, then: { $multiply: ["$historical_results.credit_hours", 1.7] } },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.67] }, then: { $multiply: ["$historical_results.credit_hours", 1.3] } },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.64] }, then: { $multiply: ["$historical_results.credit_hours", 1] } }
                                    ],
                                    default: 0
                                }
                            }
                        }
                    },
                    {
                        $group: {
                            _id: "$personal_info.code",
                            "no of courses taken": { $sum: 1 },
                            "total_hours": { $sum: "$historical_results.credit_hours" },
                            "total_GPAS": { $sum: "$GPAS" }
                        }
                    },
                    {
                        $project: {
                            "no of courses taken": 1,
                            "total_hours": 1,
                            //"total_GPAS": 1,
                            //"cumulative gpa": { $divide: ["$total_GPAS", "$total_hours"] }
                            "cumulative gpa": { $round: [{ $divide: ["$total_GPAS", "$total_hours"] }, 2] }
                        }
                    }
                ])
        },
        // Q14
        {
            query:
                db.students.aggregate([
                    {
                        $unwind: "$historical_results"
                    },
                    {
                        $set: {
                            "GPAS": {
                                $switch: {
                                    branches: [
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.97] }, then: { $multiply: ["$historical_results.credit_hours", 4] } },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.93] }, then: { $multiply: ["$historical_results.credit_hours", 3.7] } },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.89] }, then: { $multiply: ["$historical_results.credit_hours", 3.3] } },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.84] }, then: { $multiply: ["$historical_results.credit_hours", 3] } },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.80] }, then: { $multiply: ["$historical_results.credit_hours", 2.7] } },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.76] }, then: { $multiply: ["$historical_results.credit_hours", 2.3] } },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.73] }, then: { $multiply: ["$historical_results.credit_hours", 2] } },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.70] }, then: { $multiply: ["$historical_results.credit_hours", 1.7] } },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.67] }, then: { $multiply: ["$historical_results.credit_hours", 1.3] } },
                                        { case: { $gte: [{ $divide: ["$historical_results.total", "$historical_results.max_total"] }, 0.64] }, then: { $multiply: ["$historical_results.credit_hours", 1] } }
                                    ],
                                    default: 0
                                }
                            }
                        }
                    },
                    {
                        $group: {
                            _id: "$personal_info.code",
                            "no of courses taken": { $sum: 1 },
                            "total_hours": { $sum: "$historical_results.credit_hours" },
                            "total_GPAS": { $sum: "$GPAS" }
                        }
                    },
                    {
                        $project: {
                            "no of courses taken": 1,
                            "total_hours": 1,
                            //"total_GPAS": 1,
                            //"cumulative gpa": { $divide: ["$total_GPAS", "$total_hours"] }
                            "cumulative gpa": { $round: [{ $divide: ["$total_GPAS", "$total_hours"] }, 2] }
                        }
                    },
                    {
                        $sort: { "cumulative gpa": -1 }
                    }
                ])
        },
        //Q15
        {
            query:
            db.students.aggregate([
                {
                  $unwind: "$registered_courses"
                },
                {
                  $group: {
                    _id: "$registered_courses.instructors.code",
                    courses_taught: { $addToSet: "$registered_courses.code" }
                    //teacher_name: { $first: "$registered_courses.instructors.full_name" },
                  }
                },
                {
                  $project: {
                    //"teacher_name": 1,
                    "total_courses": { $size: "$courses_taught" },
                    _id: 0
                  }
                }
              ])
        },
        //Q 16
        { query:
            db.students.aggregate(
                [
                    {
                        $unwind:"$registered_courses"
                    },
                    {
                        $group:
                        {
                            _id:"$registered_courses.instructors.full_name",
                            "no of courses": {$sum:1}
                        }
                    },
                    {
                        $project:
                        {
                            "teacher name": "$registered_courses.instructors.full_name",
                            "no of courses":1
                        }
                    }
                ]
            )
        }
    ];


// Clear the console
print("\x1Bc");


// Execute the queries
var counter = 0;
queries.forEach(({ query }) => {
    const cursor = query;
    counter++;

    if (typeof query === 'object' && typeof query.forEach === 'function') {
        query.forEach(doc => {
            printjson(doc);
        });
    }
    else {
        //print("Query result does not return a cursor. Printing the result:");
        printjson(query);
    }

    print("--------------" + counter + "---------------");
});
