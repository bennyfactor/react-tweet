import React from 'react'
import styles from './styles'

class Context extends React.Component {
  render () {
    const {data} = this.props

    return (
      <div className="context" style={styles.context}>
        <div className="tweet-context">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 72" style={styles.IconContext}>
            <path d="M70.676 36.644C70.166 35.636 69.13 35 68 35h-7V19c0-2.21-1.79-4-4-4H34c-2.21 0-4 1.79-4 4s1.79 4 4 4h18c.552 0 .998.446 1 .998V35h-7c-1.13 0-2.165.636-2.676 1.644-.51 1.01-.412 2.22.257 3.13l11 15C55.148 55.545 56.046 56 57 56s1.855-.455 2.42-1.226l11-15c.668-.912.767-2.122.256-3.13zM40 48H22c-.54 0-.97-.427-.992-.96L21 36h7c1.13 0 2.166-.636 2.677-1.644.51-1.01.412-2.22-.257-3.13l-11-15C18.854 15.455 17.956 15 17 15s-1.854.455-2.42 1.226l-11 15c-.667.912-.767 2.122-.255 3.13C3.835 35.365 4.87 36 6 36h7l.012 16.003c.002 2.208 1.792 3.997 4 3.997h22.99c2.208 0 4-1.79 4-4s-1.792-4-4-4z"/>
          </svg>
          <span className="retweet-text" style={styles.retweet}>
            <a className="pretty-link" href={`http://twitter.com/${data.user.screen_name}`} style={styles.link}>
              <b style={styles.b}>{data.user.name}</b>
            </a>
            {' Retweeted'}
          </span>
        </div>
      </div>
    )
  }
}

Context.propTypes = {
  'data': React.PropTypes.object
}

Context.displayName = 'Context'

export default Context
