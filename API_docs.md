# Fee Calculator API Documentation

## Student Codes

```json
{
    "HELP": "Help",
    "Domestic": {
        "DUG": "Undergraduate",
        "DPG": "Postgraduate Coursework Commonwealth-Supported",
        "DFPG": "Postgraduate Coursework Fee-Paying",
        "DHDRP": "Higher Degree by Research Preliminary",
        "DHR": "Higher Degree Research",
        "DNA": "Non-award"
    },
    "Onshore International": {
        "INTUG": "Undergraduate",
        "INTPG": "Postgraduate Coursework",
        "INTHDR": "Higher Degree Research"
    },
    "Study Abroad": {
        "INTSA": "Study Abroad"
    },
    "OffShore International": "Not Available"
}
```

## /GetUnitsForMajor

    https://www.fees.uwa.edu.au/Calculator/GetUnitsForMajor

### Request

```json
{ "majorCode": "all", "feeYear": "2021" }
```

### Response

```json
[{"ARCY3012": "500 years of Historical, Maritime and Industrial Archaeology",…}]
```

## /GetCourses

    https://www.fees.uwa.edu.au/Calculator/GetCourses

### Request

```json
{ "feeCategory": "DUG", "feeYear": "2021" }
```

### Response

    Returns a list of 2 elements. First ele is an object and the second ele is a list. The keys of the first element are the major codes and the values of the first element are the name of the major. The second element is a list of the starting year.

```json
[{"10270": "Diploma in Arts - Undergraduate [10270]",…}, ["2021 on", "Pre-2021"]]
```

## /GetYearsForCourse

    https://www.fees.uwa.edu.au/Calculator/GetYearsForCourse

### Request

```json
{ "feeCategory": "INTUG", "courseCode": "BP004", "feeYear": "2021" }
```

### Response

    Returns a list of starting years.

```json
[["2021", "2020"]]
```

## /GetMajorsForCourse

    https://www.fees.uwa.edu.au/Calculator/GetMajorsForCourse

### Request

```json
{ "course": "BP004" }
```

### Response

```json
{"all": "All majors", "MJD-ABHWB": "Aboriginal Health and Wellbeing",…}
```

## /GetCourseFee

    https://www.fees.uwa.edu.au/Calculator/GetCourseFee

### Request

```json
{
    "feeCategory": "INTUG",
    "feeYear": "2021",
    "courseCode": "BP004",
    "year": "Starting 2021"
}
```

### Response

```json
[
    {
        "course_name": "Bachelor of Science [BP004]",
        "course_credit_point": "144",
        "annual_credit_point": "48",
        "fee_per_credit_point": "$835.42",
        "fee": "$40,100",
        "total_fee": "$120,300"
    }
]
```

## /GetFeeForMajor

    https://www.fees.uwa.edu.au/Calculator/GetFeeForMajor

### Request

```json
{
    "feeCategory": "DUG",
    "feeYear": "2021",
    "courseCode": "BP004",
    "majorCode": "all",
    "year": "Starting Pre-2021"
}
```

### Response

```json
[
    {
        "course_credit_point": "144",
        "creditpoint": "48",
        "fee_median": "$7,404",
        "fee_range": "$3,950 - $11,355"
    }
]
```

## /GetUnitInfo

    https://www.fees.uwa.edu.au/Calculator/GetUnitInfo

### Request

```json
{
    "feeCategory": "DUG",
    "feeYear": "2021",
    "unit": "Discrete Structures [CITS2211]",
    "courseCode": "BP004",
    "year": "Starting Pre-2021"
}
```

### Response

```json
[{ "creditpoint": "6", "eftsl": "0.125", "fee": "993" }]
```
