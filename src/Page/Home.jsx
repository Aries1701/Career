import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchJobs();
  }, []);

  const companies = [
    {
      rank: 'FAST500',
      logo: 'https://i.imgur.com/9u46f2y.png',
      name: 'CÔNG TY CỔ PHẦN ADEMAX',
    },
    {
      rank: 'V1000',
      logo: 'https://i.imgur.com/7y6v62Z.png',
      name: 'CÔNG TY TNHH PANASONIC APPLIANCES VIỆT NAM',
    },
    {
      rank: 'PROFIT500',
      logo: 'https://i.imgur.com/0zW0y9e.png',
      name: 'CÔNG TY CỔ PHẦN ĐIỆN CƠ THỐNG NHẤT',
    },
    {
      rank: 'PROFIT500',
      logo: 'https://i.imgur.com/p8x53x4.png',
      name: 'CÔNG TY CỔ PHẦN ĐẦU TƯ THƯƠNG MẠI VÀ PHÁT TRIỂN...',
    },
  ];

  const jobCategories = [
    { icon: '$', title: 'Kinh doanh / Bán hàng', count: 14631 },
    { icon: '< />', title: 'IT phần mềm', count: 3815 },
    { icon: '💼', title: 'Hành chính / Văn phòng', count: 4485 },
    { icon: '🎓', title: 'Giáo dục / Đào tạo', count: 3487 },
    { icon: '💬', title: 'Tư vấn', count: 4549 },
    { icon: '📣', title: 'Marketing / Truyền thông /...', count: 7589 },
    { icon: '🚚', title: 'Vận tải / Kho vận', count: 1391 },
    { icon: '✅', title: 'Kế toán / Kiểm toán', count: 3586 },
  ];

  const fetchJobs = async () => {
    try {
      const response = await fetch(`https://example.com/api/jobs?page=${currentPage}&filter=${filter}`); // Replace with your API endpoint
      const data = await response.json();
      setJobs(data.jobs);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchJobs();
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setCurrentPage(1);
    fetchJobs();
  };

  return (
    <div className="app">
      <main className="main">
        <section className="banner">
          <div className="container">
            <div className="banner-content">
              <h1>Công nghệ AI dự đoán, cá nhân hóa việc làm</h1>
              <h2>Mức lương cao dành cho bạn.</h2>
              <div className="search-bar">
                <input type="text" placeholder="Vị trí ứng tuyển" />
                <button>Tìm kiếm</button>
              </div>
            </div>
          </div>
        </section>

        {/* việc làm tốt nhất */}

        <section className="jobs">
          <div className="container">
            <h2>Việc làm tốt nhất</h2>
            <div className="jobs-filter">
              <select value={filter} onChange={handleFilterChange}>
                <option value="all">Tất cả</option>
                <option value="ngau-nhien">Ngẫu nhiên</option>
                <option value="ha-noi">Hà Nội</option>
                <option value="ho-chi-minh">Thành phố Hồ Chí Minh</option>
                <option value="mien-bac">Miền Bắc</option>
                <option value="mien-nam">Miền Nam</option>
              </select>
            </div>
            <div className="jobs-list">
              {jobs.map((job) => (
                <Link to={`/jobs/${job.id}`} key={job.id} className="job-card">
                  <div className="job-card-header">
                    <h3>{job.title}</h3>
                    <span className="company">{job.company}</span>
                  </div>
                  <div className="job-card-body">
                    <p className="location">{job.location}</p>
                    <p className="salary">{job.salary}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button key={page} onClick={() => handlePageChange(page)}>
                  {page}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* top công ty hàng đầu */}
        <section>
        <div className="app2">
          <div className="container2">
            <h1>Top Công ty hàng đầu</h1>
            <div className="companies">
            {companies.map((company) => (
              <div key={company.name} className="company">
                <div className="rank">{company.rank}</div>
                <img src={company.logo} alt={company.name} className="logo" />
                <div className="name">{company.name}</div>
              </div>
          ))}
            </div>
            <div className="controls">
              <button className="control left">&lt;</button>
              <button className="control right">&gt;</button>
            </div>
          </div>
        </div>
        </section>

        {/* top ngành nghề nổi bật */}
        <section>
          <div className="container3">
            <h1>Top ngành nghề nổi bật</h1>
            <p>Bạn muốn tìm việc mới? Xem danh sách việc làm tại đây.</p>
            <div className="job-categories">
              {jobCategories.map((category, index) => (
                <div key={index} className="job-category">
                  <div className="icon">{category.icon}</div>
                    <h3>{category.title}</h3>
                    <p>{category.count} việc làm</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>



      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 TopCV. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;