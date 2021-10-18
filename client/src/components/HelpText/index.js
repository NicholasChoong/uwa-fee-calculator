import React from 'react'

const HelpText = () => {
  return (
    <main>
      <div className='container-fluid' id='Guidetitle'>
        <div className='container MainContainer option-container'>
          <div className='row'>
            <div className='col'>
              <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>
                {' '}
                Definitions and Help{' '}
              </h3>
            </div>
          </div>
          <hr style={{ width: '30%', margin: 'auto' }} />
          <br />

          <div className='row'>
            <div className='col'></div>
            <div className='col'>
              <li>
                <a className='c' href='#FeeTypeDef'>
                  Fee Type Definitions
                </a>
              </li>

              <li>
                <a className='c' href='#WhatCommonwealth'>
                  What is a Commonwealth supported place?
                  {/* <!--<h5>What is a Commonwealth supported place?</h5>--> */}
                </a>
              </li>

              <li>
                <a className='c' href='#HELP'>
                  The Higher Education Loan Programme (HELP)
                </a>
              </li>

              <li>
                <a className='c' href='#EFTSL'>
                  What is EFTSL
                </a>
              </li>

              <li>
                <a className='c' href='#HowFeesCalculated'>
                  How are fees calculated
                </a>
              </li>
            </div>
            <div className='col'></div>
          </div>
        </div>
      </div>

      <br />

      {/* <!-- Fee Type Definitions --> */}
      <div className='container MainContainer'>
        <div className='row' id='FeeTypeDef'>
          <div className='col'>
            <br />
            <h1 style={{ fontWeight: 'bold' }}>Fee Type Definitions</h1>
            <hr style={{ width: '50%', margin: 'auto' }} />
            <br />
            <br />
            <table className='center'>
              <tr>
                <th style={{ textAlign: 'center' }}>Fee Type</th>
                <th style={{ textAlign: 'center' }}>Definition</th>
              </tr>
              <tr>
                <td style={{ textAlign: 'center' }}>Domestic Undergraduate</td>
                <td>
                  This is your first degree and you&apos;re an Australian or NZ
                  citizen, or hold an Australian permanent resident or permanent
                  humanitarian visa.
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center' }}>
                  Domestic Postgraduate Coursework Commonwealth Supported
                </td>
                <td>
                  This is not your first degree, more than one third is
                  coursework, it generally leads to an initial professional
                  qualification, and you are an Australian or NZ citizen, or
                  hold an Australian permanent resident or permanent
                  humanitarian visa.
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center' }}>
                  Domestic Postgraduate Coursework Fee-Paying
                </td>
                <td>
                  This is not your first degree, more than a third is
                  coursework, it ‘s not a Commonwealth Supported course, and
                  you’re an Australian or NZ citizen, or hold an Australian
                  permanent resident or permanent humanitarian visa.
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center' }}>
                  Domestic Higher Degree by Research Preliminary
                </td>
                <td>
                  You’re studying to qualify for entry to a higher degree by
                  research, and you’re an Australian or NZ citizen, or hold an
                  Australian permanent resident or permanent humanitarian visa.
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center' }}>
                  Domestic Higher Degree Research
                </td>
                <td>
                  At least two thirds of the course is research and you’re an
                  Australian or NZ citizen, or hold an Australian permanent
                  resident or permanent humanitarian visa.
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center' }}>Domestic Non-Award</td>
                <td>
                  You’re not studying for credit towards a qualification, and
                  you’re an Australian or NZ citizen, or hold an Australian
                  permanent resident or permanent humanitarian visa.
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center' }}>
                  International Onshore Undergraduate
                </td>
                <td>
                  This is your first degree, you’re studying in Australia and
                  you are NOT an Australian or NZ citizen, nor hold an
                  Australian permanent resident or permanent humanitarian visa.
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center' }}>
                  International Onshore Postgraduate Coursework
                </td>
                <td>
                  This is not your first degree, you’re studying in Australia,
                  more than a third is coursework and you’re NOT an Australian
                  or NZ citizen, nor hold an Australian permanent resident or
                  permanent humanitarian visa.
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center' }}>
                  International Onshore Higher Degree Research
                </td>
                <td>
                  This is not your first degree, you’re studying in Australia,
                  at least two thirds is research and you are NOT an Australian
                  or NZ citizen, nor hold an Australian permanent resident or
                  permanent humanitarian visa.
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <br />
      <br />

      {/* <!-- What is Commonwealth Supported Place --> */}
      <div className='container MainContainer'>
        <div className='row' id='WhatCommonwealth'>
          <div className='col'>
            <br />
            <h1 style={{ fontWeight: 'bold' }}>
              What is a Commonwealth supported place?
            </h1>
            <hr style={{ width: '80%', margin: 'auto' }} />
            <br />
            <br />

            <li>
              A Commonwealth supported place is a subsidised enrolment at
              university. The Australian Government subsidises a Commonwealth
              supported place by paying part of the fees for the place directly
              to the university and the student pays the remainder of the fees
              through a &apos;student contribution&apos; amount.
            </li>
            <br />
            <li>
              Commonwealth supported places are only available to domestic
              students. These places are available in all undergraduate courses
              at UWA and some postgraduate courses.
            </li>
            <br />
            <li>
              To be eligible for a Commonwealth supported place, you must
              <ul>
                <li className='a'>
                  be an Australian citizen, a New Zealand citizen or the holder
                  of a permanent visa
                </li>
                <li className='a'>
                  meet the citizenship and residency requirements
                </li>
                <li className='a'>enrol in each unit by the census date</li>
                <li className='a'>
                  submit a valid Request for Commonwealth support and HECS-HELP
                  form to UWA by the census date
                </li>
                <li className='a'>
                  finalise your payment arrangements for your student
                  contributions by the census date
                </li>
              </ul>
            </li>
            <br />
            <li>
              Australian citizens and permanent humanitarian visa holders who
              are enrolled in a Commonwealth supported place can use the
              HECS-HELP scheme to help them pay their student contributions.
            </li>
            <br />
            <li>
              New Zealand citizens and permanent visa holders enrolled in a
              Commonwealth supported place must pay their student contribution
              upfront to UWA by the census date. If their student contribution
              amount is left unpaid after the census date then UWA will cancel a
              student’s Commonwealth supported place.
            </li>
            <br />
            <li>
              If you are not enrolled as a Commonwealth supported student, you
              will be enrolled as a fee paying student. This means the
              Government does not subsidise your education and you will need to
              pay the tuition fees set by UWA. Some fee paying students are
              eligible for a FEE-HELP loan to pay their tuition fees.
            </li>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className='container MainContainer'>
        <div className='row' id='HELP'>
          <div className='col'>
            <br />
            <h1 style={{ fontWeight: 'bold' }}>
              The Higher Education Loan Programme (HELP)
            </h1>
            <hr style={{ width: '80%', margin: 'auto' }} />
            <br />
            <br />
            <li>
              The Government administers the Higher Education Loan Programme
              (HELP) which consists of five HELP loans schemes to assist
              students with the cost of their fees. The right loan for you will
              depend on your circumstances, eligibility and where you want to
              study.
            </li>
            <br />
            <li>
              For further information, please visit{' '}
              <a href='https://www.studyassist.gov.au/help-loans'>
                https://www.studyassist.gov.au/help-loans
              </a>
            </li>
            <br />
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className='container MainContainer'>
        <div className='row' id='EFTSL'>
          <div className='col'>
            <br />
            <h1 style={{ fontWeight: 'bold' }}>What is EFTSL?</h1>
            <hr style={{ width: '50%', margin: 'auto' }} />
            <br />
            <br />

            <li>
              Equivalent full-time student load (EFTSL) is a measure of the
              study load for a year of a student undertaking a course on a
              full-time basis.
            </li>
            <br />
            <li>
              The EFTSL value assigned to each unit of study taken in a course
              represents the workload in the unit as a proportion of the
              standard annual workload normally undertaken by a full-time
              student in that course.
            </li>
            <br />
            <li>
              These calculations are normally based on the credit point values
              for coursework degrees.
            </li>
            <br />
            <li>
              Therefore, a 6 point unit taken in a course for which 48 points
              constitutes a standard annual workload would be assigned 6/48 =
              0.125 EFTSL.
            </li>
            <br />
            <li>
              The same unit taken in a degree with 50 points in a standard year
              would be assigned 6/50 = 0.12 EFTSL.
            </li>
          </div>
        </div>
      </div>

      <br />
      <br />

      {/* <!-- How Are Fees Calculated --> */}
      <div className='container MainContainer'>
        <div className='row' id='HowFeesCalculated'>
          <div className='col'>
            <br />
            <h1 style={{ fontWeight: 'bold' }}>How Are Fees Calculated?</h1>
            <hr style={{ width: '50%', margin: 'auto' }} />
            <br />
            <br />

            <li>
              <a href='#DUPCSS'>
                Domestic Undergraduate and Postgraduate Commonwealth Supported
                Students
              </a>
            </li>
            <li>
              <a href='#DCFPS'>Domestic Coursework Fee-Paying Students</a>
            </li>
            <li>
              <a href='#DHDRPS'>
                Domestic Higher Degree by Research Preliminary Students
              </a>
            </li>
            <li>
              <a href='#DHDRS'>Domestic Higher Degree Research Students</a>
            </li>
            <li>
              <a href='#DNAS'>Domestic Non-Award Students</a>
            </li>
            <li>
              <a href='#IOUS'>International Onshore Undergraduate Students</a>
            </li>
            <li>
              <a href='#otherIntl'>
                International Onshore Postgraduate Coursework Students, and
                International Higher Degree by Research Students
              </a>
            </li>
            <br />
            <br />

            {/* <!-- Domestic Undergraduate and Postgraduate Commonwealth Supported Students--> */}
            <h4 id='DUPCSS' style={{ fontWeight: 'bolder' }}>
              Domestic Undergraduate and Postgraduate Commonwealth Supported
              Students
            </h4>
            <br />
            <li>
              Every non-exempt student enrolled in a Commonwealth supported unit
              of study must pay the student contribution amount for the unit.
            </li>
            <br />
            <li>
              This amount depends on the funding cluster to which units of study
              are allocated.
            </li>
            <br />
            <li>
              Units of study are allocated to funding clusters according to
              their discipline under the Australian Standard ClassNameification
              of Education.
            </li>
            <br />
            <li>
              The maximum student contribution amounts for a particular year are
              published by the Department of Education.
            </li>
            <br />
            <li>
              When calculating the student contribution amount for a unit, the
              formula is the student contribution amount for a place set by UWA
              for the unit multiplied by the EFTSL value of the unit.
            </li>
            <br />
            <p style={{ fontStyle: 'italic', marginLeft: '50px' }}>
              Example: Sandra has enrolled in MATH1001 as part of her Bachelor
              of Science degree. UWA has set the student contribution amount for
              a place at $3,950 (the maximum permitted) for that unit of study
              in 2021. The EFTSL value for MATH1001 is 0.125 EFTSL (6/48).
              Therefore, Sandra’s student contribution amount for MATH1001 will
              be 3,950 X 0.125 = $493.75
            </p>
            <br />
            <li>
              The table below shows the student contribution amounts for a
              student place (EFTSL), by discipline, in 2021:
            </li>
            <br />
            <table className='displayTable center'>
              <tbody>
                <tr>
                  <th>Unit discipline</th>
                  <th>
                    2021 annual contribution for a standard (one EFTSL)
                    full-time load (usually 48 credit points)
                  </th>
                  <th>
                    Approximate student contribution for a 6 credit point unit
                    (0.125 EFTSL)
                  </th>
                </tr>
                <tr>
                  <td>
                    Law, Accounting, Commerce, Economics, Administration,
                    Communications, Society and Culture[1]&amp;[2]
                  </td>
                  <td style={{ textAlign: 'center' }}>$14,500</td>
                  <td style={{ textAlign: 'center' }}>$1,812</td>
                </tr>
                <tr>
                  <td>
                    Agriculture Education, Postgraduate Clinical Psychology[3],
                    English, Mathematics &amp; Statistics Nursing, Indigenous
                    and Foreign Languages
                  </td>
                  <td style={{ textAlign: 'center' }}>$3,950</td>
                  <td style={{ textAlign: 'center' }}>$493</td>
                </tr>
                <tr>
                  <td>
                    Allied health, Other health, Built environment, Computing,
                    Visual and Performing Arts, Professional Pathway
                    Psychology[4] and Professional Pathway Social Work[5]
                    Engineering, Science, Surveying, Environmental Studies
                    Pathology
                  </td>
                  <td style={{ textAlign: 'center' }}>$7,950</td>
                  <td style={{ textAlign: 'center' }}>$993</td>
                </tr>
                <tr>
                  <td>Medicine, Dentistry, Veterinary Science</td>
                  <td style={{ textAlign: 'center' }}>$11,300</td>
                  <td style={{ textAlign: 'center' }}>$1,412</td>
                </tr>
              </tbody>
            </table>
            <br />
            <li>
              Notes:
              <ol>
                <li className='b'>
                  Excluding Postgraduate Clinical Psychology units, which are in
                  funding cluster 2 (see note 3) and excluding Professional
                  Pathway Psychology units with FOE codes starting with 0907
                  which are in cluster 2 (s Excluding Postgraduate Clinical
                  Psychology units, which are in funding cluster 2 (see note 3),
                  and excluding Professional Pathway Psychology units with FOE
                  codes starting with 0907 which are in cluster 2 (see note 4).
                </li>
                <li className='b'>
                  Excluding Professional Pathway Social Work units with FOE
                  codes starting with 0905 which are in cluster 2 (see note 5).
                </li>
                <li className='b'>
                  Postgraduate Clinical Psychology units of study are in funding
                  cluster 2 and are psychology units of study (FOE code 090701)
                  that contribute to courses of study that are accredited for
                  the purposes of professional registration by the Australian
                  Health Practitioner Regulation Agency (AHPRA) and which lead
                  to Endorsed Areas of Practice in Clinical Psychology, Clinical
                  Neuropsychology, Counselling Psychology, Educational and
                  Developmental Psychology, Forensic Psychology, Health
                  Psychology, Sports Psychology and Community Psychology.
                </li>
                <li className='b'>
                  Professional Pathway Psychology units of study are Behavioural
                  Science units (with FOE codes starting with 0907) that
                  contribute to courses of study that lead to a bachelors
                  degree, honours degree or masters degree in psychology with a
                  course structure that makes it compulsory to study the units
                  relevant to professional registration as a psychologist by the
                  Psychology Board of Australia, and which itself represents a
                  pathway to professional registration as a psychologist.
                </li>
                <li className='b'>
                  Professional Pathway Social Work units of study are Human
                  Welfare Studies and Services units (with FOE codes starting
                  with 0905) that contribute to courses of study that lead to a
                  bachelors degree, honours degree or masters degree in social
                  work accredited by the Australian Association of Social
                  Workers (AASW).
                </li>
              </ol>
            </li>

            <br />
            <br />

            {/* <!-- Domestic Coursework Fee-Paying Students--> */}

            <h4 id='DCFPS' style={{ fontWeight: 'bolder' }}>
              Domestic Coursework Fee-Paying Students
            </h4>
            <br />
            <li>
              This category of student is charged per credit point at a rate
              dependent only on the course in which the student is enrolled (see
              Fee Calculator for the fees charged).
            </li>

            <br />
            <br />

            {/* <!-- Domestic Higher Degree by Research Preliminary Students --> */}

            <h4 id='DHDRPS' style={{ fontWeight: 'bolder' }}>
              Domestic Higher Degree by Research Preliminary Students
            </h4>
            <br />
            <li>
              Students in these courses are full fee-paying but their fees are
              calculated in the same way, and charged at the same rate, as
              Commonwealth supported students.
            </li>

            <br />
            <br />

            {/* <!-- Domestic Higher Degree Research Students --> */}
            <h4 id='DHDRS' style={{ fontWeight: 'bolder' }}>
              Domestic Higher Degree Research Students
            </h4>
            <br />
            <li>
              All higher degree research students at UWA are funded under the
              Commonwealth Government’s{' '}
              <a href='https://study.uwa.edu.au/fees-and-scholarships/research-training-program'>
                Research Training Program
              </a>{' '}
              (RTP) and are therefore fee exempt for the duration of the course,
              up to a maximum of four years full-time equivalent study for a
              doctorate by research and two years full-time equivalent study for
              a master&apos;s by research.
            </li>
            <br />
            <br />

            {/* <!-- Domestic Non-Award Students --> */}
            <h4 id='DNAS' style={{ fontWeight: 'bolder' }}>
              Domestic Non-Award Students
            </h4>
            <br />
            <li>
              Fees for domestic non-award students are calculated similarly to
              Commonwealth supported students (i.e. EFTSL multiplied by funding
              cluster rate for the unit’s discipline) but using the rates in the
              table below:
            </li>
            <br />
            <table className='displayTable center'>
              <tbody>
                <tr>
                  <th>Unit discipline</th>
                  <th>Unit discipline 2021 Fee per EFTSL</th>
                </tr>
                <tr>
                  <td>
                    Law, Accounting, Administration, Economics, Commerce,
                    Communications, Society &amp; Culture
                  </td>
                  <td style={{ textAlign: 'center' }}>$15,600</td>
                </tr>
                <tr>
                  <td>
                    Education, Postgraduate Clinical psychology, English,
                    Mathematics or Statistics
                  </td>
                  <td style={{ textAlign: 'center' }}>$17,200</td>
                </tr>
                <tr>
                  <td>
                    Allied health, Other Health, Computing, Built Environment,
                    Visual and Performing arts, Professional Pathway Psychology
                    or Professional Pathway Social Work
                  </td>
                  <td style={{ textAlign: 'center' }}>$21,200</td>
                </tr>
                <tr>
                  <td>Nursing, Indigenous and Foreign languages</td>
                  <td style={{ textAlign: 'center' }}>$20,200</td>
                </tr>
                <tr>
                  <td>
                    Engineering, Surveying , Environmental Studies or Science
                  </td>
                  <td style={{ textAlign: 'center' }}>$24,200</td>
                </tr>
                <tr>
                  <td>Agriculture</td>
                  <td style={{ textAlign: 'center' }}>$30,950</td>
                </tr>
                <tr>
                  <td>Medicine, Dentistry, Veterinary Science</td>
                  <td style={{ textAlign: 'center' }}>$38,300</td>
                </tr>
                <tr>
                  <td>Pathology</td>
                  <td style={{ textAlign: 'center' }}>$34,950</td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />

            {/* <!-- International Onshore Undergraduate Students --> */}

            <h4 id='IOUS' style={{ fontWeight: 'bolder' }}>
              International Onshore Undergraduate Students
            </h4>
            <br />
            <li>
              Students who commenced an undergraduate course in 2015 or later
              are charged a fee per credit point which depends on the course in
              which they are enrolled. The fees for 2021 are:
            </li>
            <br />
            <table className='displayTable center'>
              <tbody>
                <tr>
                  <th>Course Code</th>
                  <th>Course Name</th>
                  <th>Total Course Credit Points</th>
                  <th>Annual Credit Points</th>
                  <th>2021 annual fee</th>
                  <th>Fee per credit point</th>
                </tr>

                <tr>
                  <td style={{ textAlign: 'center' }}>BP001</td>
                  <td>Bachelor of Arts</td>
                  <td style={{ textAlign: 'center' }}>144</td>
                  <td style={{ textAlign: 'center' }}>48</td>
                  <td style={{ textAlign: 'center' }}>$33,000</td>
                  <td style={{ textAlign: 'center' }}>$687</td>
                </tr>

                <tr>
                  <td style={{ textAlign: 'center' }}>BP002</td>
                  <td>Bachelor of Commerce</td>
                  <td style={{ textAlign: 'center' }}>144</td>
                  <td style={{ textAlign: 'center' }}>48</td>
                  <td style={{ textAlign: 'center' }}>$39,500</td>
                  <td style={{ textAlign: 'center' }}>$823</td>
                </tr>

                <tr>
                  <td style={{ textAlign: 'center' }}>BP003</td>
                  <td>Bachelor of Design</td>
                  <td style={{ textAlign: 'center' }}>144</td>
                  <td style={{ textAlign: 'center' }}>48</td>
                  <td style={{ textAlign: 'center' }}>$37,400</td>
                  <td style={{ textAlign: 'center' }}>$779</td>
                </tr>

                <tr>
                  <td style={{ textAlign: 'center' }}>BP004</td>
                  <td>Bachelor of Science</td>
                  <td style={{ textAlign: 'center' }}>144</td>
                  <td style={{ textAlign: 'center' }}>48</td>
                  <td style={{ textAlign: 'center' }}>$40,100</td>
                  <td style={{ textAlign: 'center' }}>$835</td>
                </tr>

                <tr>
                  <td style={{ textAlign: 'center' }}>BP006</td>
                  <td>Bachelor of Biomadical Science</td>
                  <td style={{ textAlign: 'center' }}>144</td>
                  <td style={{ textAlign: 'center' }}>48</td>
                  <td style={{ textAlign: 'center' }}>$40,100</td>
                  <td style={{ textAlign: 'center' }}>$835</td>
                </tr>

                <tr>
                  <td style={{ textAlign: 'center' }}>BH005</td>
                  <td>Bachelor of Philosophy (Honours)</td>
                  <td style={{ textAlign: 'center' }}>192</td>
                  <td style={{ textAlign: 'center' }}>48</td>
                  <td style={{ textAlign: 'center' }}>$42,800</td>
                  <td style={{ textAlign: 'center' }}>$891</td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
            <li>
              Students who started their course earlier than 2015 are charged by
              unit of study using the usual formula of EFTSL multiplied by the
              unit’s discipline funding cluster rate. The rates for 2021 are as
              follows:
            </li>
            <br />
            <table className='displayTable center'>
              <tbody>
                <tr>
                  <th>Unit discipline</th>
                  <th>Fee per EFTSL</th>
                </tr>

                <tr>
                  <td>
                    Humanities, behavioural science, clinical psychology, social
                    studies, education, foreign languages, visual and performing
                    arts
                  </td>
                  <td style={{ textAlign: 'center' }}>$32,200</td>
                </tr>

                <tr>
                  <td>Architecture and building</td>
                  <td style={{ textAlign: 'center' }}>$37,400</td>
                </tr>

                <tr>
                  <td>
                    Law, accounting, commerce, economics, administration,
                    mathematics, statistics, computing, other health
                  </td>
                  <td style={{ textAlign: 'center' }}>$39,400</td>
                </tr>

                <tr>
                  <td>
                    Agriculture, dentistry, medicine, veterinary science, allied
                    health, medical science, nursing
                  </td>
                  <td style={{ textAlign: 'center' }}>$40,100</td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />

            <h4 id='otherIntl' style={{ fontWeight: 'bolder' }}>
              International Onshore Postgraduate Coursework Students, and
              International Higher Degree by Research Students
            </h4>
            <br />
            <li>
              Students in these categories are charged a fee per credit point
              which depends on the course in which they are enrolled. Please see
              Fee Calculator for the annual course charges.
            </li>
            <br />
            <br />
          </div>
        </div>
      </div>
    </main>
  )
}

export default HelpText
