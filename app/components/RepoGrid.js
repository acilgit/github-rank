/**
 * Created by 18953 on 2017/5/14.
 */
import PropTypes from 'prop-types';

function RepoGrid(props) {
    return (
        <ul className="popular-list">
            {props.repos.map((repo, index) => {
                return (
                    <li className="popular-item" key={repo.name}>
                        <div className="popular-rank">#{index + 1}</div>
                        <ul className="space-list-items">
                            <li>
                                <img src={repo.owner.avatar_url}
                                     alt={"Avatar for " + repo.owner.login}
                                     className="avatar"/>
                            </li>
                            <li><a href={repo.html_url}>{repo.name}</a></li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count} stars</li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

RepoGrid.propTypes = {
    repos: PropTypes.arrayOf(PropTypes.shape({
        owner: PropTypes.shape({
            avatar_url: PropTypes.string,
            login: PropTypes.string
        }),
        html_url: PropTypes.string,
        name: PropTypes.string,
        stargazers_count: PropTypes.number
    })).isRequired
};

export default RepoGrid